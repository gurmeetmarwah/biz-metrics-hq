import Link from "next/link";

type LinkTreeNode = {
  label: string;
  href: string;
  children?: readonly LinkTreeNode[];
};

function LinkTreeBranch({ node, depth = 0 }: { node: LinkTreeNode; depth?: number }) {
  const padding = depth * 16;
  return (
    <li>
      <Link
        href={node.href}
        className="text-sm text-ink-muted hover:text-accent"
        style={{ paddingLeft: padding }}
      >
        {depth > 0 && (
          <span className="mr-2 text-ink-faint" aria-hidden="true">
            {depth === 1 ? "├──" : "│   ├──"}
          </span>
        )}
        {node.label}
      </Link>
      {node.children && node.children.length > 0 && (
        <ul className="mt-1 space-y-1">
          {node.children.map((child) => (
            <LinkTreeBranch key={`${child.label}-${child.href}`} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function HubLinkTree({ tree }: { tree: readonly LinkTreeNode[] }) {
  return (
    <nav aria-label="Industry section links" className="rounded-2xl border border-border bg-surface-muted/30 p-6 font-mono text-sm">
      <ul className="space-y-1">
        {tree.map((node) => (
          <LinkTreeBranch key={node.label} node={node} />
        ))}
      </ul>
    </nav>
  );
}
