async function delay(time: number) {
  return new Promise(ok => setTimeout(ok, time))
}

export async function getData() {
  await delay(3000)
  return "# h1\n\n## h2\n\nParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraph\n\n- item1\n  - subItem1\n  - subItem2\n- item2"
}