import React from "react";

const Features = () => {
    return (
        <section id="features">
            {/* Flex Container */}
            <div className="container flex flex-col px-14 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row pb-20">
                {/* What's Different */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        Welcome to Your Next-Gen HR Management System
                    </h2>
                    <p className="max-w-sm text-center text-xl text-darkGrayishBlue md:text-left">
                        Designed to simplify and enhance every aspect of HR
                        operations, our platform offers a comprehensive suite of
                        features to meet your organization's unique needs.
                    </p>
                </div>

                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {/* List Item 1 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-gray rounded-full md:py-1 bg-brightRed">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Employee Management
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Employee Management
                            </h3>
                            <p className="text-darkGrayishBlue text-xl">
                                Efficiently manage all employee details in one
                                centralized system.
                            </p>
                        </div>
                    </div>

                    {/* List Item 2 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-gray rounded-full md:py-1 bg-brightRed">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Payroll Management
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Payroll Management
                            </h3>
                            <p className="text-darkGrayishBlue text-xl">
                                Automate payroll processing with precision,
                                including tax calculations and compliance
                                reporting.
                            </p>
                        </div>
                    </div>

                    {/* List Item 3 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-gray rounded-full md:py-1 bg-brightRed">
                                    03
                                </div>
                                <h3 className="text-base  font-bold md:mb-4 md:hidden ">
                                    Everything you need in one place
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block ">
                                Everything you need in one place
                            </h3>
                            <p className="text-darkGrayishBlue text-xl">
                                Stop jumping from one service to another to
                                communicate, store files, track tasks and share
                                documents. Manage offers an all-in-one team
                                productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
