

interface Message {
    kind: 'received' | 'sent'
    content: string
    date: Date
}

const ChatMessage = (props: { message: Message }) => { }