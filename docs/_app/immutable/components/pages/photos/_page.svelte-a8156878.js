import {
	S as C,
	i as J,
	s as w,
	k as l,
	q as z,
	a as x,
	l as t,
	m as p,
	r as A,
	h as u,
	c as b,
	n as e,
	J as B,
	b as F,
	D as s,
	B as D
} from '../../../chunks/index-1aff59f2.js';
function K(k) {
	let a, v, I, E, h, y, P, r, g, i, G, j, _, o, H, q, m, n, L;
	return {
		c() {
			(a = l('div')),
				(v = l('h2')),
				(I = z('Here are some of my personal pictures inside flex-box')),
				(E = x()),
				(h = l('br')),
				(y = l('br')),
				(P = x()),
				(r = l('div')),
				(g = l('li')),
				(i = l('img')),
				(j = x()),
				(_ = l('li')),
				(o = l('img')),
				(q = x()),
				(m = l('li')),
				(n = l('img')),
				this.h();
		},
		l(f) {
			a = t(f, 'DIV', { class: !0 });
			var c = p(a);
			v = t(c, 'H2', { class: !0 });
			var M = p(v);
			(I = A(M, 'Here are some of my personal pictures inside flex-box')),
				M.forEach(u),
				(E = b(c)),
				(h = t(c, 'BR', { class: !0 })),
				(y = t(c, 'BR', { class: !0 })),
				(P = b(c)),
				(r = t(c, 'DIV', { class: !0 }));
			var d = p(r);
			g = t(d, 'LI', { class: !0 });
			var R = p(g);
			(i = t(R, 'IMG', { src: !0, alt: !0, class: !0 })),
				R.forEach(u),
				(j = b(d)),
				(_ = t(d, 'LI', { class: !0 }));
			var S = p(_);
			(o = t(S, 'IMG', { src: !0, alt: !0, class: !0 })),
				S.forEach(u),
				(q = b(d)),
				(m = t(d, 'LI', { class: !0 }));
			var V = p(m);
			(n = t(V, 'IMG', { src: !0, alt: !0, class: !0 })),
				V.forEach(u),
				d.forEach(u),
				c.forEach(u),
				this.h();
		},
		h() {
			e(v, 'class', 'svelte-5ayg44'),
				e(h, 'class', 'svelte-5ayg44'),
				e(y, 'class', 'svelte-5ayg44'),
				B(i.src, (G = '1.jpg')) || e(i, 'src', G),
				e(i, 'alt', ''),
				e(i, 'class', 'personalPic svelte-5ayg44'),
				e(g, 'class', 'svelte-5ayg44'),
				B(o.src, (H = '2.jpg')) || e(o, 'src', H),
				e(o, 'alt', ''),
				e(o, 'class', 'personalPic svelte-5ayg44'),
				e(_, 'class', 'svelte-5ayg44'),
				B(n.src, (L = '3.jpg')) || e(n, 'src', L),
				e(n, 'alt', ''),
				e(n, 'class', 'personalPic svelte-5ayg44'),
				e(m, 'class', 'svelte-5ayg44'),
				e(r, 'class', 'flexbox-img-container svelte-5ayg44'),
				e(a, 'class', 'content svelte-5ayg44');
		},
		m(f, c) {
			F(f, a, c),
				s(a, v),
				s(v, I),
				s(a, E),
				s(a, h),
				s(a, y),
				s(a, P),
				s(a, r),
				s(r, g),
				s(g, i),
				s(r, j),
				s(r, _),
				s(_, o),
				s(r, q),
				s(r, m),
				s(m, n);
		},
		p: D,
		i: D,
		o: D,
		d(f) {
			f && u(a);
		}
	};
}
class O extends C {
	constructor(a) {
		super(), J(this, a, null, K, w, {});
	}
}
export { O as default };
