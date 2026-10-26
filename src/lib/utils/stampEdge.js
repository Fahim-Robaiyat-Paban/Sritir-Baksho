// Perforated postage-stamp edge for `mask`: bites along a 6px padding ring, solid content box.
// The element needs 6px of padding (p-1.5) for the bites to land on its edge.
export const stampEdge = "radial-gradient(circle 4px, #0000 97%, #000) -6px -6px / 12px 12px round, linear-gradient(#000 0 0) content-box";

export const stampEdgeStyle = { mask: stampEdge, WebkitMask: stampEdge };
