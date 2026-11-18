export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 md:px-16 py-10">

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">ShopEase.</h2>
          <p className="text-gray-300 mt-3">
            Your favorite destination for online shopping.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <p className="text-gray-300">Home</p>
          <p className="text-gray-300">Products</p>
          <p className="text-gray-300">Shopping Cart</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-gray-300">support@shopease.com</p>
          <p className="text-gray-300">Pakistan</p>
        </div>

      </div>

      <hr className="border-gray-700 my-8" />

      <p className="text-center text-gray-400 text-sm">
        © 2026 ShopEase. All Rights Reserved.
      </p>

    </footer>
  );
}