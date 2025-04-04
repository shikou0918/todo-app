import { setupWorker } from 'msw/browser';
import { handlers } from './moocks/handlers';

export const worker = setupWorker(...handlers);
