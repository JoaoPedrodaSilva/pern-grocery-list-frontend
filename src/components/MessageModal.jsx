export const MessageModal = ({ message }) => (
    <aside className="flex justify-center items-center text-xs xs:text-sm">
        <p className={`text-center ${message.color}`}>{message.message}</p>
    </aside>
)
