import React from 'react'

export const FAQ = () => {
    return (
        <div>

            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 py-12">
                    <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

                    <div class="mt-8 space-y-8 lg:mt-12">
                        <div class="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                            <button class="flex w-full items-center justify-between">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Q: How often should I feed my pet?</h1>
                            </button>

                            <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">A: The frequency and amount of feeding depend on your pet's species, age, and size. Generally, dogs are fed 1-2 times a day, while cats may be fed multiple small meals.</p>
                        </div>

                        <div class="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                            <button class="flex w-full items-center justify-between">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Q: What vaccinations does my pet need?</h1>
                            </button>

                            <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">A: Consult with your veterinarian to create a vaccination schedule based on your pet's species, age, and lifestyle. Regular vaccinations help prevent various diseases.</p>
                        </div>





                        <div class="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                            <button class="flex w-full items-center justify-between">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Q: How can I prevent fleas and ticks on my pet?</h1>
                            </button>

                            <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">A: Use vet-recommended flea and tick preventatives, regularly groom your pet, and keep their living environment clean. Consult your vet for the most effective products.
                            </p>
                        </div>



                        <div class="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                            <button class="flex w-full items-center justify-between">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Q: What's the best way to groom my pet?</h1>
                            </button>

                            <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">A: Regular brushing, bathing, and nail trimming are essential for pet grooming. The frequency depends on the breed and coat type. Consult your vet or a professional groomer for guidance.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
