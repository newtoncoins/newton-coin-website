/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1yOsOqUTJx5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CoinsIcon className="h-6 w-6" />
          <span className="sr-only">Newton Coin</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Create Wallet
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Newton Coin
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-primary-foreground md:text-xl">
                The Future of Digital Currency in Education
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Introduction to Newton Coin</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Newton Coin is a digital currency focused on education. Our mission is to provide a secure and
                accessible platform for students, educators, and institutions to engage with cryptocurrency and
                blockchain technology.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                By integrating Newton Coin into educational curriculums and programs, we aim to empower the next
                generation with the knowledge and skills needed to navigate the evolving digital landscape.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Newton Coin"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features of Newton Coin</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Newton Coin offers a range of features designed to enhance the educational experience and promote the
                adoption of digital currency.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 p-8 md:p-10 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Newton Coin utilizes advanced blockchain technology to ensure secure and transparent transactions,
                providing a safe environment for educational payments and transactions.
              </p>
            </div>
            <div className="grid gap-1 p-8 md:p-10 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Educational Resources</h3>
              <p className="text-muted-foreground">
                Our platform offers a comprehensive suite of educational resources, including tutorials, workshops, and
                interactive learning materials, to help students, educators, and institutions understand and utilize
                Newton Coin.
              </p>
            </div>
            <div className="grid gap-1 p-8 md:p-10 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Classroom Integration</h3>
              <p className="text-muted-foreground">
                Newton Coin is designed to seamlessly integrate into educational curriculums and programs, enabling
                schools and universities to incorporate cryptocurrency and blockchain concepts into their teaching.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">&copy; 2024 Newton Coin. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Create Wallet
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}