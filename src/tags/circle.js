export default function (node, stroke, fill) {
    var attrs = node.attrs,
        ctx = node.context,
        f = node.factor;
    ctx.beginPath();
    ctx.arc(
        f*attrs.get('cx', 0),
        f*attrs.get('cy', 0),
        f*attrs.get('r', 0),
        0, 2 * Math.PI
    );
    ctx.closePath();
    ctx.stroke();
    if (fill) ctx.fill();
}