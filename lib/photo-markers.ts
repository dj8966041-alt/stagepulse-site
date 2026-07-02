export type PhotoItem = { src: string; alt: string }

/** Parse [PHOTOS:...] or [GALLERY:...] markers — src|alt pairs separated by ;; */
export function parsePhotoMarker(paragraph: string): PhotoItem[] {
  const open = paragraph.startsWith('[GALLERY:')
    ? '[GALLERY:'
    : paragraph.startsWith('[PHOTOS:')
      ? '[PHOTOS:'
      : null
  if (!open || !paragraph.endsWith(']')) return []

  const inner = paragraph.slice(open.length, -1)
  if (!inner.trim()) return []

  return inner
    .split(';;')
    .map((entry) => {
      const [src, alt] = entry.split('|')
      return { src: (src ?? '').trim(), alt: (alt ?? '').trim() }
    })
    .filter((item) => item.src.length > 0)
}
