import { HttpResponse } from 'msw';
import type { HttpResponseResolver } from 'msw';

const get: HttpResponseResolver = () => {
    return HttpResponse.json([
        {
            id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
            title: 'Buy groceries',
            text: 'Milk, Bread, Eggs, and Butter',
        },
        {
            id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
            title: 'Complete project',
            text: 'Finish the TypeScript project by the weekend',
        },
    ]);
};
export default { get };
