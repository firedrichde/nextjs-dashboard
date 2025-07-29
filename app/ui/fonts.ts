import {Inter,Lusitana} from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

export const subInter = Inter({subsets: ['latin'], weight: ['700']});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
})