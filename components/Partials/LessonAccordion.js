import React from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { ChapterSection } from './ChapterSection'

export const LessonAccordion = ({ chapters }) => {
  return (
    <>
      <Accordion>
        {chapters &&
          chapters.map((chapter) => (
            <AccordionItem key={chapter.id}>
              <AccordionItemHeading>
                <AccordionItemButton>{chapter.name}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ChapterSection lessons={chapter.courseLessons} />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  )
}
