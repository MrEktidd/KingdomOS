export const paths:Record<string,string>={
 crown:'M3 8 7 12 12 4 17 12 21 8 19 19H5L3 8ZM5 22h14',
 globe:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM2 12h20M12 2c-5 5-5 15 0 20m0-20c5 5 5 15 0 20',
 grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
 settings:'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a8 8 0 0 0 .06-6l2-1.6-2-3.4-2.4 1A8 8 0 0 0 12 3L11.6 1h-3.5L7.7 3a8 8 0 0 0-3 2l-2.4-1-2 3.4L2.4 9a8 8 0 0 0 .06 6l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 3 2l.4 2h3.5l.4-2a8 8 0 0 0 3-2l2.4 1 2-3.4L19.4 15Z',
 sliders:'M4 7h16M4 17h16M9 4v6M15 14v6',
 shield:'M12 2 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z',
 scroll:'M8 3h11v15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 6 0v13M8 3v13',
 layers:'m12 2 10 6-10 6L2 8l10-6Zm-10 10 10 6 10-6M2 16l10 6 10-6',
 search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6-2 5 5',
 close:'M5 5 19 19M19 5 5 19',
 minus:'M4 12h16',
 maximize:'M5 5h14v14H5z',
 chevron:'m8 10 4 4 4-4',
 arrow:'M4 12h16m-6-6 6 6-6 6',
 save:'M4 3h14l3 3v15H3V3h1ZM7 3v7h10V3M7 21v-8h10v8',
 upload:'M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5',
 download:'M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4',
 check:'m4 12 5 5L20 6',
 clock:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12 6v6l4 3',
 compass:'m15.8 8.2-3 7.6-4.6 1.9 1.9-4.6 5.7-4.9ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
 menu:'M4 6h16M4 12h16M4 18h16',
 info:'M12 17v-5m0-5h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20',
 plus:'M12 4v16M4 12h16',
 map:'m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15',
 flag:'M5 22V4m0 1c5-4 9 4 15 0v10c-6 4-10-4-15 0',
 calendar:'M3 6h18v15H3V6ZM7 2v8m10-8v8M3 11h18',
 spark:'m12 2 2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3L12 2Z',
 palette:'M12 2a10 10 0 0 0 0 20h1a2 2 0 0 0 1-3.7c-1.1-.6-.7-2.3.6-2.3H18a4 4 0 0 0 4-4A10 10 0 0 0 12 2ZM7 12h.01M9 7h.01M15 7h.01M18 12h.01'
};
export function icon(name:string,size=18):string {
 return '<svg class="icon" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+(paths[name]||paths.grid)+'"/></svg>';
}
