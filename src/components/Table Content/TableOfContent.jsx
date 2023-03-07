import { useHeadsObserver } from './Hooks'
import './tableOfContent.css'
import { useEffect, useState } from 'react'

const getClassName = (level) => {
  switch (level) {
    case 2:
      return 'head2'
    case 3:
      return 'head3'
    case 4:
      return 'head4'
    default:
      return null
  }
}

function TableOfContent() {
  const [headings, setHeadings] = useState([])
  const {activeId} = useHeadsObserver()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .map((elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1))
      }))
    setHeadings(elements)
  }, [])

  const [Toggle, showMenu] = useState(false);
  
  return (
    <div>
        <nav className="tableContent__nav">
            <ul className='tableContent__ul'>
                <h1 className='tableContent__title'>หัวข้อเนื้อหา </h1>
                {headings.map(heading => (
                <li
                    key={heading.id}
                    className={getClassName(heading.level)}
                    style={{
                        fontWeight: activeId === heading.id ? "bold" : "normal" ,
                        color: activeId === heading.id ? "#576b9e" : "var(--text-color)" 
                    }}
                    >
                    <a
                    href={`#${heading.id}`} 
                    onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(`#${heading.id}`).scrollIntoView({
                        behavior: "smooth"
                        })}}
                        style={{
                        fontWeight: activeId === heading.id ? "bold" : "normal" ,
                        color: activeId === heading.id ? "#576b9e" : "var(--text-color)" 
                        }}
                    >    
                    {heading.text}
                    </a>
                </li>
                ))}
            </ul>
        </nav>

    </div>
  )
  
}

export default TableOfContent