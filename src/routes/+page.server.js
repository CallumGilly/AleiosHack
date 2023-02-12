import query from "$lib/server/database";

export async function load() {
    let dbResponse = await query('SELECT * FROM Hack.reports', []);

    return { arr: JSON.parse(JSON.stringify(dbResponse)) };
    // return {
    //     arr: [
    //         {
    //             reportID: 5,
    //             Longitude: -1.401555,
    //             Latitude: 50.954955,
    //             Image: null,
    //             Time: '2023-02-12T06:40:15.000Z',
    //             Category: 'Litter',
    //             Description: 'There rubbish here'
    //         },
    //         {
    //             reportID: 6,
    //             Longitude: -1.401555,
    //             Latitude: 50.954955,
    //             Image: null,
    //             Time: '2023-02-12T06:42:10.000Z',
    //             Category: 'Water Wastage',
    //             Description: 'The taps on'
    //         }
    //     ]
    // }
}