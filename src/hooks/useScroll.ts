export const onScroll = (targetId: string) => {
  const container = document.getElementById('scrollContainer');
  const target = document.getElementById(targetId);

  if (container && target) {
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const padding = 60;

    const scrollPosition =
      targetRect.top - padding - containerRect.top + container.scrollTop;
    container.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
