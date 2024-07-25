import { inject, DestroyRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

export function untilDestroyed(destroyRef: DestroyRef): Subject<boolean> {
  const subject = new Subject<boolean>();

  destroyRef.onDestroy(() => {
    subject.next(true);
    subject.complete();
  });
  return subject
}
