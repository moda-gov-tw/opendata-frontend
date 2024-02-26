export default function () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  onMounted(() => {
    window.addEventListener('scroll', elementOffset)
  })
  const { scrollDistance, elementOffset } = useDetectScrollY()
  return {
    scrollDistance,
    scrollToTop
  }
}
