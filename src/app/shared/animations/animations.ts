import { trigger, transition, style, animate, animateChild, query, state, keyframes, stagger, AnimationTriggerMetadata } from "@angular/animations";

  export const listShakeAnimation: AnimationTriggerMetadata[] = [
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

  export const listFadeAnimation: AnimationTriggerMetadata = 
  trigger('listFade', [
    transition('* => *', [ 
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