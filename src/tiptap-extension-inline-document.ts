// https://github.com/ssvet/tiptap-extension-inline-document
// https://3.basecamp.com/3963735/buckets/39593699/todos/8017749096
import Document from '@tiptap/extension-document'

const InlineDocument = Document.extend({
  content: 'text*',
})

export default InlineDocument