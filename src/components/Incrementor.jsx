import React, { useState, useEffect } from "react";

const Incrementor = () => {
    const targetValues = [
        { label: 'Destinations', target: 20 },
        { label: 'Hotels', target: 50 },
        { label: 'Happy Travelers', target: 1270 },
    ];

    const [values, setValues] = useState(
        targetValues.map(value => ({ label: value.label, count: 0, target: value.target }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setValues(prevValues => {
                return prevValues.map(value => {
                    if (value.count < value.target) {
                        return { ...value, count: value.count + 1 }; // Increment until target
                    }
                    return value; // Keep the count at target once reached
                });
            });
        }, 1); // Increment every 1 ms for a smooth animation

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col w-full h-70vh justify-center items-center my-6">
            <div>
                <h1 className="font-semibold text-5xl">Our Success</h1>
            </div>
            <div className="flex flex-col md:flex-row md:gap-36 gap-8 py-20 px-2 md:px-0">
                {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h1 className="text-6xl text-center text-black_3">{value.count}+</h1>
                        <p className="text-3xl text-center text-black_3">{value.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Incrementor;
