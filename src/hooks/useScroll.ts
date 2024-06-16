export const onScroll = (targetId: string, scrollTo: 'top' | 'bottom') => {
  const container = document.getElementById('scrollContainer');
  const target = document.getElementById(targetId);

  if (container && target) {
    const targetRect = target.getBoundingClientRect();
    const scrollPosition = targetRect[scrollTo] + container.scrollTop;

    container.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
