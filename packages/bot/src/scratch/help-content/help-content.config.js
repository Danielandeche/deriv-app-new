import constant from '../../constants/const';

const { help: { TEXT, VIDEO, IMAGE, BLOCK } } = constant;

export const config = {
    math_change: [
        { type: TEXT },
        { type: VIDEO, url: 'https://www.youtube.com/embed/Bb0HnaYNUx4' },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: TEXT },
        { type: BLOCK },
    ],
    math_arithmetic: [
        { type: VIDEO, url: 'https://www.youtube.com/embed/Bb0HnaYNUx4' },
        { type: TEXT },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: BLOCK },
    ],
    math_number: [
        { type: VIDEO, url: 'https://www.youtube.com/embed/Bb0HnaYNUx4' },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: BLOCK },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
    ],
    math_random_float: [
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: BLOCK },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
    ],
    math_random_int: [
        { type: TEXT },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: BLOCK },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
    ],
    variables_get: [
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        { type: TEXT },
        { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        { type: BLOCK },
        { type: TEXT },
        { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
    ],
    trade_definition: [
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: TEXT },
        { type: BLOCK },
    ],
    trade_definition_tradeoptions: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
    before_purchase: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
    during_purchase: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
    sell_at_market: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
    after_purchase: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
    trade_again: [
        { type: TEXT },
        { type: BLOCK },
        { type: TEXT },
    ],
};
