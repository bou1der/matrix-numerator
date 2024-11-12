'use client'

import { useEditor , EditorContent, type Editor as TEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import ListItem from "@tiptap/extension-list-item"
import ListBullet from "@tiptap/extension-bullet-list"
import CharacterCount from '@tiptap/extension-character-count'
import { Skeleton } from "./ui/skeleton"
import { Toggle } from "./ui/toggle"
import { Bold, Italic, List, ListOrdered, Strikethrough, UnderlineIcon } from "lucide-react"

type Options = {
  limit?:{
    length:number,
    expand:boolean
  }
}

export function Editor({text, options, disabled}:
  {
    text:string,
    disabled?:boolean,
    options?:Options
  }){

  const editor = useEditor({
    immediatelyRender:false,
    extensions:[
      StarterKit,
      ListBullet.configure({
      }),
      ListItem,
      CharacterCount.configure({
        mode:"textSize",
        limit: options?.limit?.length || undefined
      })
    ],
    content: text,
  })

  if(!editor){
    return (
      <div className="space-y-2">
        {
          disabled ?? (
            <div className="flex gap-2">
              <Skeleton className="w-40 h-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
              <Skeleton className="size-10 rounded-md" />
            </div>
          )
        }
        <Skeleton className="h-40 w-full rounded-md" />
      </div>
    )
  }

  if(
    options?.limit?.length &&
    editor.getCharacterCount() > options.limit.length &&
    !options.limit.expand
  ){
    const truncated = editor.getHTML().slice(0, options.limit.length)
    editor.commands.setContent(truncated + "...")
  }

  if(disabled){
    editor.setEditable(false)
  }


  return (
    <div className="size-full space-y-2">
      {
        disabled ?? (
          <EditorControls editor={editor}/>
        )
      }

      <EditorContent
        editor={editor}
      />
    </div>
  )
}

const IconClassName = "size-4";


function EditorControls({editor}:
  {
    editor:TEditor
  }){

  return (
    <>
      <div className="flex">
        <div className="flex gap-0.5">
          <Toggle
            pressed={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className={IconClassName} />
          </Toggle>
          <Toggle
            pressed={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic className={IconClassName} />
          </Toggle>
          <Toggle
            pressed={editor.isActive("strike")}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough className={IconClassName} />
          </Toggle>
        </div>
        <div className="flex gap-0.5">
          <Toggle
            pressed={editor.isActive("bulletList")}
            onClick={() => editor.commands.toggleBulletList()}
          >
            <List className={IconClassName} />
          </Toggle>
          <Toggle
            pressed={editor.isActive("orderedList")}
            onClick={() => editor.commands.toggleOrderedList()}
          >
            <ListOrdered className={IconClassName} />
          </Toggle>
        </div>
      </div>
    </>
  )
}
