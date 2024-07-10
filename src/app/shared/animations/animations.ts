import { trigger, transition, style, animate, animateChild, query, state, keyframes, stagger } from "@angular/animations";

// export const EnterExitLeft = [
//   trigger('enterExitLeft', [
//     transition(':enter', [
//       style({ opacity: 0, transform: 'translateX(-200px)' }),
//       animate(
//         '300ms ease-in',
//         style({ opacity: 1, transform: 'translateX(0)' })
//       ),
//     ]),
//     transition(':leave', [
//       animate(
//         '300ms ease-in',
//         style({ opacity: 0, transform: 'translateX(-200px)' })
//       ),
//     ]),
//   ]),
// ];


// export const EnterExitRight = [
//   trigger('enterExitRight', [
//     transition(':enter', [
//       style({ transform: 'translateX(200px)' }),
//       animate(
//         '300ms ease-in',
//         style({   transform: 'translateX(0)' })
//       ),
//     ]),
//     transition(':leave', [
//       animate(
//         '300ms ease-in',
//         style({   transform: 'translateX(200px)' })
//       ),
//     ]),
//   ]),
// ];

 

// export const HoverBox = [
//   trigger('hoverBox', [
//     transition(':enter', animate('1s ease-out',
//       keyframes([
//         style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
//           style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
//           style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
//           style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
//           style({ transform: 'scale3d(1, 1, 1)', offset: 1 }) 
//       ])
    
//   )),
//     ])
//   ];

  export const listShakeAnimation = [
    trigger('listShake', [
        transition('* <=> *', [
          query(':enter', [
            style({opacity: 0, transform: 'translateY(-100px)'}),
            stagger(30, [
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'})),
            ]),
          ],
          { optional: true }),
          query(':leave', [
            // stagger(30, [
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(-100px)'})),
            // ]),
          ],
          { optional: true }),
        ]),
    ]),
  ];

  export const listFadeAnimation = 
  trigger('listFade', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(200, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(200, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ])