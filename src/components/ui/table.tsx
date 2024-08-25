
export const Table = ({ children }) => <table>{children}</table>;
export const TableBody = ({ children }) => <tbody>{children}</tbody>;
export const TableCell = ({ children }) => <td>{children}</td>;
export const TableHead = ({ children }) => <thead>{children}</thead>;
export const TableHeader = ({ children }) => <th>{children}</th>;

interface TableRowProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Updated TableRow to accept onClick and other props
export const TableRow = ({ children, onClick, className }: TableRowProps) => (
  <tr onClick={onClick} className={className}>
    {children}
  </tr>
)
