import {
	S as I,
	i as V,
	s as j,
	k as a,
	q as g,
	a as p,
	l,
	m as f,
	r as y,
	h as v,
	c as m,
	n as o,
	b as z,
	D as t,
	B as q
} from '../../chunks/index-1aff59f2.js';
function G(T) {
	let e, c, x, B, d, u, E, r, D, P, _, R, n, W, k, b, C, i, H;
	return {
		c() {
			(e = a('div')),
				(c = a('h1')),
				(x = g('Welcome!')),
				(B = p()),
				(d = a('br')),
				(u = a('br')),
				(E = p()),
				(r = a('p')),
				(D =
					g(`This is a portfolio webpage of mine for the submission of Assignment 1 in the course Front-end Web
        Development`)),
				(P = p()),
				(_ = a('br')),
				(R = p()),
				(n = a('p')),
				(W = g('Click any of the above section to redirect to the corresponding pages')),
				(k = p()),
				(b = a('br')),
				(C = p()),
				(i = a('p')),
				(H = g('Have fun!')),
				this.h();
		},
		l(h) {
			e = l(h, 'DIV', { class: !0 });
			var s = f(e);
			c = l(s, 'H1', { class: !0 });
			var w = f(c);
			(x = y(w, 'Welcome!')),
				w.forEach(v),
				(B = m(s)),
				(d = l(s, 'BR', { class: !0 })),
				(u = l(s, 'BR', { class: !0 })),
				(E = m(s)),
				(r = l(s, 'P', { class: !0 }));
			var A = f(r);
			(D = y(
				A,
				`This is a portfolio webpage of mine for the submission of Assignment 1 in the course Front-end Web
        Development`
			)),
				A.forEach(v),
				(P = m(s)),
				(_ = l(s, 'BR', { class: !0 })),
				(R = m(s)),
				(n = l(s, 'P', { class: !0 }));
			var F = f(n);
			(W = y(F, 'Click any of the above section to redirect to the corresponding pages')),
				F.forEach(v),
				(k = m(s)),
				(b = l(s, 'BR', { class: !0 })),
				(C = m(s)),
				(i = l(s, 'P', { class: !0 }));
			var S = f(i);
			(H = y(S, 'Have fun!')), S.forEach(v), s.forEach(v), this.h();
		},
		h() {
			o(c, 'class', 'svelte-1pv8cm9'),
				o(d, 'class', 'svelte-1pv8cm9'),
				o(u, 'class', 'svelte-1pv8cm9'),
				o(r, 'class', 'svelte-1pv8cm9'),
				o(_, 'class', 'svelte-1pv8cm9'),
				o(n, 'class', 'svelte-1pv8cm9'),
				o(b, 'class', 'svelte-1pv8cm9'),
				o(i, 'class', 'svelte-1pv8cm9'),
				o(e, 'class', 'content svelte-1pv8cm9');
		},
		m(h, s) {
			z(h, e, s),
				t(e, c),
				t(c, x),
				t(e, B),
				t(e, d),
				t(e, u),
				t(e, E),
				t(e, r),
				t(r, D),
				t(e, P),
				t(e, _),
				t(e, R),
				t(e, n),
				t(n, W),
				t(e, k),
				t(e, b),
				t(e, C),
				t(e, i),
				t(i, H);
		},
		p: q,
		i: q,
		o: q,
		d(h) {
			h && v(e);
		}
	};
}
class K extends I {
	constructor(e) {
		super(), V(this, e, null, G, j, {});
	}
}
export { K as default };
