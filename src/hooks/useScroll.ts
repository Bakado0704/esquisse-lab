export const onScroll = (targetId: string, scrollTo: 'top' | 'bottom') => {
  const container = document.getElementById('scrollContainer');
  const target = document.getElementById(targetId);

  if (container && target) {
    const targetRect = target.getBoundingClientRect();
    const padding = 60;
    const scrollPosition = targetRect[scrollTo] - padding + container.scrollTop;

    container.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
