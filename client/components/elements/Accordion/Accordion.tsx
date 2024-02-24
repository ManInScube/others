import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/accordion/index.module.scss'
import { ArrowSvg } from "../ArrowSvg/ArrowSvg"

interface IAccordion{
    children: React.ReactNode | string
    title: string
    callback?: (arg0: boolean) => void
}

const Accordion = ({
    children,
    title,
    callback,
}: IAccordion) =>{
    const [expanded, setExpanded] = useState(false)
    const toggleAccordion = () => {
        if (callback) {
          callback(expanded)
        }
    
        setExpanded(!expanded)
      }
    return(
        <div className={styles.accordion}>
            <motion.button
            initial={false}
            onClick={toggleAccordion}
            >
            {title}
            <ArrowSvg color={"#1E1E1E"}/>
            </motion.button>

            <AnimatePresence initial={false}>
                {expanded && (
                <motion.div
                    className={styles.accordion__expanded}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                    open: { opacity: 1, height: 'auto'},
                    collapsed: { opacity: 0, height: 0 },
                    }}
                    style={{ overflow: 'hidden' }}
                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    {children}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion