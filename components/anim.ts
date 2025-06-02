import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
// create your custom “hop” ease once
CustomEase.create("hop", "0.9, 0, 0.1, 1");

/**
 * Animate any list of elements from y:100% → y:0%
 */
export function playNavAnimation(targets: gsap.TweenTarget[]) {
  gsap
    .timeline({
      defaults: { ease: "hop", duration: 1.5 },
    })
    .to(targets, {
      y: "0%", // element must start at translateY(100%)
      stagger: 0.2,
    });
}
