import Box from "@/components/atoms/box";
import Brand from "@/components/atoms/brand";
import { createLazyFileRoute } from "@tanstack/react-router";


export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
      <Box preset={'stack-center'} className="min-h-screen">
      <header className="">
        <div className="container px-4 py-6 mx-auto">
          <Brand />
        </div>
      </header>

      <Box preset={'stack-center'} className="grow">
      <main className="container px-4 py-10 mx-auto">
        <section className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Welcome to Our Restaurant</h2>
          <p className="text-gray-600">
            Streamline your dining experience with our efficient and user-friendly ordering system. 
            Skip the hassle of third-party platforms and order directly from us!
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">For Restaurant Managers</h3>
            <ul className="text-gray-600">
              <li>✔️ Efficient Billing System</li>
              <li>✔️ Kitchen Order Display</li>
              <li>✔️ Customer Order Display</li>
              <li>✔️ Comprehensive Order Management</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">For Customers</h3>
            <ul className="text-gray-600">
              <li>✔️ QR Code Menu Access</li>
              <li>✔️ Self Ordering</li>
              <li>✔️ Self Takeaway Ordering</li>
              <li>✔️ Order Tracking</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h3 className="mb-4 text-xl font-semibold text-gray-700">Get Started</h3>
          <p className="mb-8 text-gray-600">
            Choose your role to proceed and enjoy a seamless experience with our system.
          </p>
          <div>
            <a href="/manager" className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
              Manager Interface
            </a>
            <a href="/customer" className="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600">
              Customer Interface
            </a>
          </div>
        </section>
      </main>
      </Box>
      <footer className="mt-12 bg-white shadow">
        <div className="container px-4 py-6 mx-auto text-center text-gray-600">
          &copy; 2024 Restaurant Ordering and Management System. All rights reserved.
        </div>
      </footer>
    </Box>
  );
}
