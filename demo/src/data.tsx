import * as React from 'react';

export const makeData = (number: number, titlePrefix = 'Tab', useTitleCounter = true) => {
    const data = [];
    for (let i = 0; i < number; i++) {
        data.push({
            title: useTitleCounter ? `${titlePrefix} ${i + 1}` : titlePrefix,
            content: (
                <div>
                    <b>Content {i}</b>
                    <p>
                        Neu instabilis illas montibus glomeravit Montibus sed ignotas. Spisso legebantur phoebe montes.
                        Dedit permisit. Glomeravit oppida formaeque ab consistere aera quam totidemque ipsa? Aera
                        extendi persidaque tanta membra spisso illi nam solidumque. Habitandae triones abscidit traxit
                        ita fossae aequalis utque.
                    </p>
                </div>
            ),
        });
    }
    return data;
};
