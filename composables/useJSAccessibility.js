export default function () {
  const addThScope = () => {
    setTimeout(() => {
      const headerCells = document.querySelectorAll('thead tr th')
      if (headerCells) {
        headerCells.forEach((th) => {
          th.setAttribute('scope', 'col')
        })
      }
    }, 0)
  }
  const isRadio = () => {
    const isRadio = document.getElementsByClassName('el-radio')
    if (isRadio.length) {
      Array.from(isRadio).forEach((span) => {
        const inputs = span.querySelector('span > input')
        const inputValue = inputs?.getAttribute('value') ? inputs.getAttribute('value') : 'none'
        let id
        if (inputs && inputValue) {
          id = inputs.getAttribute('name') + inputValue
          span.setAttribute('for', id)
          inputs.setAttribute('id', id)
        }
      })
    }
  }
  const isImgInput = () => {
    const imgInput = document.querySelectorAll('input[name="file"]')
    if (imgInput) {
      imgInput.forEach((input, i) => {
        input.setAttribute('aria-label', `照片上傳(${i})`)
      })
    }
  }
  const isTree = () => {
    const tree = document.querySelector('.el-tree')
    if (tree) {
      const label = tree.querySelectorAll('label')
      const input = tree.querySelector('.el-checkbox__original')
      if (input) {
        const id = input.getAttribute('id') ?? ''
        label.forEach((label) => {
          label.setAttribute('for', id)
        })
        input.setAttribute('title', '複選框')
      }
    }
  }
  return {
    addThScope,
    isRadio,
    isImgInput,
    isTree
  }
}
