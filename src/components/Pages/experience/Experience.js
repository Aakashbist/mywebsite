import React from 'react';

function Experience() {
    return (
        <div className="experience">
            <section class="text-gray-700 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8">
                        <div class="py-8 flex flex-wrap md:flex-no-wrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <img src="data:image/png;base64,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" width="70%"
                                />

                                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019-12 Jun 2019</span>
                            </div>
                            <div class="md:flex-grow" className="statementText">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2" className="title">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div >
    );
}

export default Experience;
