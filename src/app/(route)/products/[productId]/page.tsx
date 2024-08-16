import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap justify-center max-w-5xl  '>
      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:col-start-8">
          <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">
            ZebraBlend T-Shirt
          </h1>
          <p className="mt-2 text-2xl font-medium leading-none tracking-tight text-foreground/70">
            $55.00
          </p>
        </div>
        <div className="lg:col-span-7 lg:row-span-3 lg:row-start-1">
          <h2 className="sr-only">Images</h2>
          <img
            src="https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=1080&q=75"
            alt=""
            loading="eager"
            width={700}
            height={700}
            decoding="async"
            data-nimg={1}
            className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity"
            sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 700px"
            srcSet="https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=1080&q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="grid gap-8 lg:col-span-5">
          <section>
            <h2 className="sr-only">Description</h2>
            <div className="prose text-secondary-foreground">
              <p>
                Show off your wild side with this unique white and brown striped
                t-shirt. Made from 100% organic cotton, it offers both comfort and
                durability. Its eye-catching design makes it perfect for any casual
                occasion.
              </p>
            </div>
          </section>
          <div className="grid gap-2">
            <p className="text-base font-medium" id="variant-label">
              Variant
            </p>
            <ul
              role="list"
              className="grid grid-cols-4 gap-2"
              aria-labelledby="variant-label"
            >
              <li>
                <a
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border p-2 transition-colors hover:bg-neutral-100 border-black bg-neutral-50 font-medium"
                  aria-selected="true"
                  href="/product/zebrablend-t-shirt?variant=orange"
                >
                  Orange
                </a>
              </li>
              <li>
                <a
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border p-2 transition-colors hover:bg-neutral-100"
                  aria-selected="false"
                  href="/product/zebrablend-t-shirt?variant=brown"
                >
                  Brown
                </a>
              </li>
            </ul>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 w-full rounded-full text-lg"
            type="submit"
            aria-disabled="false"
          >
            Add to cart
          </button>
        </div>
      </div>

    </div>

  )
}

export default page