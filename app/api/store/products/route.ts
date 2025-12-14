import { NextResponse } from 'next/server';
import { getProducts, saveProduct } from '@/lib/store';

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, category, price, image, seller, sellerVpa, description, stock, unit } = body;

        if (!name || !price || !seller) {
             return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newProduct = await saveProduct({
            id: Date.now(),
            name,
            category,
            price: Number(price),
            image,
            seller,
            sellerVpa,
            description,
            stock: Number(stock),
            unit: unit || "units"
        });

        return NextResponse.json(newProduct);
    } catch (e) {
        console.error("Failed to add product", e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
        }

        const products = await getProducts();
        const filteredProducts = products.filter((p: any) => String(p.id) !== id);
        
        if (products.length === filteredProducts.length) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        await saveProduct(filteredProducts);

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error("Failed to delete product", e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

