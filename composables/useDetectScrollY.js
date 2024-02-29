export default function () {
  const scrollTimer = ref()
  const scrollDistance = ref()
  const elementOffset = () => {
    if (scrollTimer.value) return;
    scrollTimer.value = setTimeout(() => {
      scrollDistance .value = window.scrollY;
      clearTimeout(scrollTimer.value);
      scrollTimer.value = 0;
    }, 100);
  }
  return {
    scrollDistance,
    scrollTimer,
    elementOffset
  }
}
