import {
	S as Ye,
	i as Xe,
	s as Ze,
	a as Qe,
	e as B,
	c as xe,
	b as M,
	g as ce,
	t as F,
	d as fe,
	f as J,
	h as G,
	j as et,
	o as ve,
	k as tt,
	l as nt,
	m as rt,
	n as we,
	p as q,
	q as at,
	r as ot,
	u as st,
	v as W,
	w as Y,
	x as Oe,
	y as X,
	z as Z,
	A as Be
} from './chunks/index-1aff59f2.js';
import {
	g as Fe,
	f as Je,
	s as K,
	a as Ee,
	b as it,
	i as lt
} from './chunks/singletons-6158b500.js';
function ct(r, e) {
	return r === '/' || e === 'ignore'
		? r
		: e === 'never'
		? r.endsWith('/')
			? r.slice(0, -1)
			: r
		: e === 'always' && !r.endsWith('/')
		? r + '/'
		: r;
}
function ft(r) {
	for (const e in r)
		r[e] = r[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return r;
}
const ut = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function pt(r, e) {
	const t = new URL(r);
	for (const s of ut) {
		let o = t[s];
		Object.defineProperty(t, s, {
			get() {
				return e(), o;
			},
			enumerable: !0,
			configurable: !0
		});
	}
	return (t[Symbol.for('nodejs.util.inspect.custom')] = (s, o, l) => l(r, o)), dt(t), t;
}
function dt(r) {
	Object.defineProperty(r, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
function ht(r) {
	let e = 5381;
	if (typeof r == 'string') {
		let t = r.length;
		for (; t; ) e = (e * 33) ^ r.charCodeAt(--t);
	} else if (ArrayBuffer.isView(r)) {
		const t = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
		let s = t.length;
		for (; s; ) e = (e * 33) ^ t[--s];
	} else throw new TypeError('value must be a string or TypedArray');
	return (e >>> 0).toString(36);
}
const ue = window.fetch;
window.fetch = (r, e) => {
	if ((r instanceof Request ? r.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET') {
		const s = new URL(r instanceof Request ? r.url : r.toString(), document.baseURI).href;
		le.delete(s);
	}
	return ue(r, e);
};
const le = new Map();
function mt(r, e, t) {
	let o = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
		r instanceof Request ? r.url : r
	)}]`;
	(t == null ? void 0 : t.body) &&
		(typeof t.body == 'string' || ArrayBuffer.isView(t.body)) &&
		(o += `[data-hash="${ht(t.body)}"]`);
	const l = document.querySelector(o);
	if (l != null && l.textContent) {
		const { body: n, ...f } = JSON.parse(l.textContent),
			h = l.getAttribute('data-ttl');
		return (
			h && le.set(e, { body: n, init: f, ttl: 1e3 * Number(h) }),
			Promise.resolve(new Response(n, f))
		);
	}
	return ue(r, t);
}
function _t(r, e) {
	const t = le.get(r);
	if (t) {
		if (performance.now() < t.ttl) return new Response(t.body, t.init);
		le.delete(r);
	}
	return ue(r, e);
}
const gt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function yt(r) {
	const e = [],
		t = [];
	let s = !0;
	return {
		pattern:
			r === ''
				? /^\/$/
				: new RegExp(
						`^${r
							.split(/(?:\/|$)/)
							.filter(wt)
							.map((l, n, f) => {
								const h = decodeURIComponent(l),
									d = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);
								if (d) return e.push(d[1]), t.push(d[2]), '(?:/(.*))?';
								const g = n === f.length - 1;
								return (
									h &&
									'/' +
										h
											.split(/\[(.+?)\]/)
											.map((w, S) => {
												if (S % 2) {
													const U = gt.exec(w);
													if (!U)
														throw new Error(
															`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, D, V, T] = U;
													return e.push(V), t.push(T), D ? '(.*?)' : '([^/]+?)';
												}
												return (
													g && w.includes('.') && (s = !1),
													w
														.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${s ? '/?' : ''}$`
				  ),
		names: e,
		types: t
	};
}
function wt(r) {
	return !/^\([^)]+\)$/.test(r);
}
function bt(r, e, t, s) {
	const o = {};
	for (let l = 0; l < e.length; l += 1) {
		const n = e[l],
			f = t[l],
			h = r[l + 1] || '';
		if (f) {
			const d = s[f];
			if (!d) throw new Error(`Missing "${f}" param matcher`);
			if (!d(h)) return;
		}
		o[n] = h;
	}
	return o;
}
function vt(r, e, t, s) {
	const o = new Set(e);
	return Object.entries(t).map(([f, [h, d, g]]) => {
		const { pattern: w, names: S, types: U } = yt(f),
			D = {
				id: f,
				exec: (V) => {
					const T = w.exec(V);
					if (T) return bt(T, S, U, s);
				},
				errors: [1, ...(g || [])].map((V) => r[V]),
				layouts: [0, ...(d || [])].map(n),
				leaf: l(h)
			};
		return (D.errors.length = D.layouts.length = Math.max(D.errors.length, D.layouts.length)), D;
	});
	function l(f) {
		const h = f < 0;
		return h && (f = ~f), [h, r[f]];
	}
	function n(f) {
		return f === void 0 ? f : [o.has(f), r[f]];
	}
}
function Et(r) {
	let e, t, s;
	var o = r[0][0];
	function l(n) {
		return { props: { data: n[2], form: n[1] } };
	}
	return (
		o && (e = W(o, l(r))),
		{
			c() {
				e && Y(e.$$.fragment), (t = B());
			},
			l(n) {
				e && Oe(e.$$.fragment, n), (t = B());
			},
			m(n, f) {
				e && X(e, n, f), M(n, t, f), (s = !0);
			},
			p(n, f) {
				const h = {};
				if ((f & 4 && (h.data = n[2]), f & 2 && (h.form = n[1]), o !== (o = n[0][0]))) {
					if (e) {
						ce();
						const d = e;
						F(d.$$.fragment, 1, 0, () => {
							Z(d, 1);
						}),
							fe();
					}
					o
						? ((e = W(o, l(n))), Y(e.$$.fragment), J(e.$$.fragment, 1), X(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(h);
			},
			i(n) {
				s || (e && J(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && F(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && G(t), e && Z(e, n);
			}
		}
	);
}
function kt(r) {
	let e, t, s;
	var o = r[0][0];
	function l(n) {
		return { props: { data: n[2], $$slots: { default: [Rt] }, $$scope: { ctx: n } } };
	}
	return (
		o && (e = W(o, l(r))),
		{
			c() {
				e && Y(e.$$.fragment), (t = B());
			},
			l(n) {
				e && Oe(e.$$.fragment, n), (t = B());
			},
			m(n, f) {
				e && X(e, n, f), M(n, t, f), (s = !0);
			},
			p(n, f) {
				const h = {};
				if (
					(f & 4 && (h.data = n[2]),
					f & 523 && (h.$$scope = { dirty: f, ctx: n }),
					o !== (o = n[0][0]))
				) {
					if (e) {
						ce();
						const d = e;
						F(d.$$.fragment, 1, 0, () => {
							Z(d, 1);
						}),
							fe();
					}
					o
						? ((e = W(o, l(n))), Y(e.$$.fragment), J(e.$$.fragment, 1), X(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(h);
			},
			i(n) {
				s || (e && J(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && F(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && G(t), e && Z(e, n);
			}
		}
	);
}
function Rt(r) {
	let e, t, s;
	var o = r[0][1];
	function l(n) {
		return { props: { data: n[3], form: n[1] } };
	}
	return (
		o && (e = W(o, l(r))),
		{
			c() {
				e && Y(e.$$.fragment), (t = B());
			},
			l(n) {
				e && Oe(e.$$.fragment, n), (t = B());
			},
			m(n, f) {
				e && X(e, n, f), M(n, t, f), (s = !0);
			},
			p(n, f) {
				const h = {};
				if ((f & 8 && (h.data = n[3]), f & 2 && (h.form = n[1]), o !== (o = n[0][1]))) {
					if (e) {
						ce();
						const d = e;
						F(d.$$.fragment, 1, 0, () => {
							Z(d, 1);
						}),
							fe();
					}
					o
						? ((e = W(o, l(n))), Y(e.$$.fragment), J(e.$$.fragment, 1), X(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(h);
			},
			i(n) {
				s || (e && J(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && F(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && G(t), e && Z(e, n);
			}
		}
	);
}
function Ge(r) {
	let e,
		t = r[5] && Ke(r);
	return {
		c() {
			(e = tt('div')), t && t.c(), this.h();
		},
		l(s) {
			e = nt(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var o = rt(e);
			t && t.l(o), o.forEach(G), this.h();
		},
		h() {
			we(e, 'id', 'svelte-announcer'),
				we(e, 'aria-live', 'assertive'),
				we(e, 'aria-atomic', 'true'),
				q(e, 'position', 'absolute'),
				q(e, 'left', '0'),
				q(e, 'top', '0'),
				q(e, 'clip', 'rect(0 0 0 0)'),
				q(e, 'clip-path', 'inset(50%)'),
				q(e, 'overflow', 'hidden'),
				q(e, 'white-space', 'nowrap'),
				q(e, 'width', '1px'),
				q(e, 'height', '1px');
		},
		m(s, o) {
			M(s, e, o), t && t.m(e, null);
		},
		p(s, o) {
			s[5] ? (t ? t.p(s, o) : ((t = Ke(s)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(s) {
			s && G(e), t && t.d();
		}
	};
}
function Ke(r) {
	let e;
	return {
		c() {
			e = at(r[6]);
		},
		l(t) {
			e = ot(t, r[6]);
		},
		m(t, s) {
			M(t, e, s);
		},
		p(t, s) {
			s & 64 && st(e, t[6]);
		},
		d(t) {
			t && G(e);
		}
	};
}
function St(r) {
	let e, t, s, o, l;
	const n = [kt, Et],
		f = [];
	function h(g, w) {
		return g[0][1] ? 0 : 1;
	}
	(e = h(r)), (t = f[e] = n[e](r));
	let d = r[4] && Ge(r);
	return {
		c() {
			t.c(), (s = Qe()), d && d.c(), (o = B());
		},
		l(g) {
			t.l(g), (s = xe(g)), d && d.l(g), (o = B());
		},
		m(g, w) {
			f[e].m(g, w), M(g, s, w), d && d.m(g, w), M(g, o, w), (l = !0);
		},
		p(g, [w]) {
			let S = e;
			(e = h(g)),
				e === S
					? f[e].p(g, w)
					: (ce(),
					  F(f[S], 1, 1, () => {
							f[S] = null;
					  }),
					  fe(),
					  (t = f[e]),
					  t ? t.p(g, w) : ((t = f[e] = n[e](g)), t.c()),
					  J(t, 1),
					  t.m(s.parentNode, s)),
				g[4]
					? d
						? d.p(g, w)
						: ((d = Ge(g)), d.c(), d.m(o.parentNode, o))
					: d && (d.d(1), (d = null));
		},
		i(g) {
			l || (J(t), (l = !0));
		},
		o(g) {
			F(t), (l = !1);
		},
		d(g) {
			f[e].d(g), g && G(s), d && d.d(g), g && G(o);
		}
	};
}
function Ot(r, e, t) {
	let { stores: s } = e,
		{ page: o } = e,
		{ components: l } = e,
		{ form: n } = e,
		{ data_0: f = null } = e,
		{ data_1: h = null } = e;
	et(s.page.notify);
	let d = !1,
		g = !1,
		w = null;
	return (
		ve(() => {
			const S = s.page.subscribe(() => {
				d && (t(5, (g = !0)), t(6, (w = document.title || 'untitled page')));
			});
			return t(4, (d = !0)), S;
		}),
		(r.$$set = (S) => {
			'stores' in S && t(7, (s = S.stores)),
				'page' in S && t(8, (o = S.page)),
				'components' in S && t(0, (l = S.components)),
				'form' in S && t(1, (n = S.form)),
				'data_0' in S && t(2, (f = S.data_0)),
				'data_1' in S && t(3, (h = S.data_1));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 384 && s.page.set(o);
		}),
		[l, n, f, h, d, g, w, s, o]
	);
}
class Lt extends Ye {
	constructor(e) {
		super(),
			Xe(this, e, Ot, St, Ze, { stores: 7, page: 8, components: 0, form: 1, data_0: 2, data_1: 3 });
	}
}
const It = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	$t = function (r, e) {
		return new URL(r, e).href;
	},
	ze = {},
	z = function (e, t, s) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((o) => {
						if (((o = $t(o, s)), o in ze)) return;
						ze[o] = !0;
						const l = o.endsWith('.css'),
							n = l ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${o}"]${n}`)) return;
						const f = document.createElement('link');
						if (
							((f.rel = l ? 'stylesheet' : It),
							l || ((f.as = 'script'), (f.crossOrigin = '')),
							(f.href = o),
							document.head.appendChild(f),
							l)
						)
							return new Promise((h, d) => {
								f.addEventListener('load', h),
									f.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${o}`)));
							});
					})
			  ).then(() => e());
	},
	At = {},
	pe = [
		() =>
			z(
				() => import('./chunks/0-924c9551.js'),
				[
					'chunks\\0-924c9551.js',
					'components\\pages\\_layout.svelte-5e7efee4.js',
					'assets\\_layout-1147dca3.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/1-a30f7358.js'),
				[
					'chunks\\1-a30f7358.js',
					'components\\error.svelte-a721ddb6.js',
					'chunks\\index-1aff59f2.js',
					'chunks\\singletons-6158b500.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/2-dd5bea7c.js'),
				[
					'chunks\\2-dd5bea7c.js',
					'components\\pages\\_page.svelte-1c3fc0b8.js',
					'assets\\_page-f770d647.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/3-9514c805.js'),
				[
					'chunks\\3-9514c805.js',
					'components\\pages\\about\\_page.svelte-78837762.js',
					'assets\\_page-6259f52f.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/4-886ce5bb.js'),
				[
					'chunks\\4-886ce5bb.js',
					'components\\pages\\contact\\_page.svelte-a146da8b.js',
					'assets\\_page-4893350d.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/5-79cd6763.js'),
				[
					'chunks\\5-79cd6763.js',
					'components\\pages\\funjoke\\_page.svelte-9ffe56ba.js',
					'assets\\_page-6e462c7b.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			),
		() =>
			z(
				() => import('./chunks/6-035b6840.js'),
				[
					'chunks\\6-035b6840.js',
					'components\\pages\\photos\\_page.svelte-a8156878.js',
					'assets\\_page-809205d4.css',
					'chunks\\index-1aff59f2.js'
				],
				import.meta.url
			)
	],
	jt = [],
	Pt = { '': [2], about: [3], contact: [4], funjoke: [5], photos: [6] },
	Nt = {
		handleError: ({ error: r }) => {
			console.error(r);
		}
	};
class ke {
	constructor(e, t) {
		(this.status = e),
			typeof t == 'string'
				? (this.body = { message: t })
				: t
				? (this.body = t)
				: (this.body = { message: `Error: ${e}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class Me {
	constructor(e, t) {
		(this.status = e), (this.location = t);
	}
}
const Ut = '/__data.json';
async function Tt(r) {
	var e;
	for (const t in r)
		if (typeof ((e = r[t]) == null ? void 0 : e.then) == 'function')
			return Object.fromEntries(
				await Promise.all(Object.entries(r).map(async ([s, o]) => [s, await o]))
			);
	return r;
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
const Dt = -1,
	Vt = -2,
	qt = -3,
	Ct = -4,
	Bt = -5,
	Ft = -6;
function Jt(r) {
	const e = JSON.parse(r);
	if (typeof e == 'number') return o(e);
	const t = e,
		s = Array(t.length);
	function o(l) {
		if (l === Dt) return;
		if (l === qt) return NaN;
		if (l === Ct) return 1 / 0;
		if (l === Bt) return -1 / 0;
		if (l === Ft) return -0;
		if (l in s) return s[l];
		const n = t[l];
		if (!n || typeof n != 'object') s[l] = n;
		else if (Array.isArray(n))
			if (typeof n[0] == 'string')
				switch (n[0]) {
					case 'Date':
						s[l] = new Date(n[1]);
						break;
					case 'Set':
						const h = new Set();
						s[l] = h;
						for (let w = 1; w < n.length; w += 1) h.add(o(n[w]));
						break;
					case 'Map':
						const d = new Map();
						s[l] = d;
						for (let w = 1; w < n.length; w += 2) d.set(o(n[w]), o(n[w + 1]));
						break;
					case 'RegExp':
						s[l] = new RegExp(n[1], n[2]);
						break;
					case 'Object':
						s[l] = Object(n[1]);
						break;
					case 'BigInt':
						s[l] = BigInt(n[1]);
						break;
					case 'null':
						const g = Object.create(null);
						s[l] = g;
						for (let w = 1; w < n.length; w += 2) g[n[w]] = o(n[w + 1]);
						break;
				}
			else {
				const f = new Array(n.length);
				s[l] = f;
				for (let h = 0; h < n.length; h += 1) {
					const d = n[h];
					d !== Vt && (f[h] = o(d));
				}
			}
		else {
			const f = {};
			s[l] = f;
			for (const h in n) {
				const d = n[h];
				f[h] = o(d);
			}
		}
		return s[l];
	}
	return o(0);
}
const We = 'sveltekit:scroll',
	C = 'sveltekit:index',
	oe = vt(pe, jt, Pt, At),
	Re = pe[0],
	Se = pe[1];
Re();
Se();
let te = {};
try {
	te = JSON.parse(sessionStorage[We]);
} catch {}
function be(r) {
	te[r] = Ee();
}
function Gt({ target: r, base: e, trailing_slash: t }) {
	var Ve;
	const s = [];
	let o = null;
	const l = { before_navigate: [], after_navigate: [] };
	let n = { branch: [], error: null, url: null },
		f = !1,
		h = !1,
		d = !0,
		g = !1,
		w = !1,
		S,
		U = (Ve = history.state) == null ? void 0 : Ve[C];
	U || ((U = Date.now()), history.replaceState({ ...history.state, [C]: U }, '', location.href));
	const D = te[U];
	D && ((history.scrollRestoration = 'manual'), scrollTo(D.x, D.y));
	let V = !1,
		T,
		Le,
		ne;
	async function Ie() {
		(ne = ne || Promise.resolve()), await ne, (ne = null);
		const a = new URL(location.href),
			u = _e(a, !0);
		(o = null), await Ae(u, a, []);
	}
	async function de(
		a,
		{ noscroll: u = !1, replaceState: p = !1, keepfocus: i = !1, state: c = {} },
		m,
		_
	) {
		return (
			typeof a == 'string' && (a = new URL(a, Fe(document))),
			ge({
				url: a,
				scroll: u ? Ee() : null,
				keepfocus: i,
				redirect_chain: m,
				details: { state: c, replaceState: p },
				nav_token: _,
				accepted: () => {},
				blocked: () => {},
				type: 'goto'
			})
		);
	}
	async function $e(a) {
		const u = _e(a, !1);
		if (!u) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (o = { id: u.id, promise: Ne(u) }), o.promise;
	}
	async function Ae(a, u, p, i, c = {}, m) {
		var k, E;
		Le = c;
		let _ = a && (await Ne(a));
		if (
			(_ ||
				(_ = await De(
					u,
					null,
					ee(new Error(`Not found: ${u.pathname}`), { url: u, params: {}, routeId: null }),
					404
				)),
			(u = (a == null ? void 0 : a.url) || u),
			Le !== c)
		)
			return !1;
		if (_.type === 'redirect')
			if (p.length > 10 || p.includes(u.pathname))
				_ = await re({
					status: 500,
					error: ee(new Error('Redirect loop'), { url: u, params: {}, routeId: null }),
					url: u,
					routeId: null
				});
			else return de(new URL(_.location, u).href, {}, [...p, u.pathname], c), !1;
		else
			((E = (k = _.props) == null ? void 0 : k.page) == null ? void 0 : E.status) >= 400 &&
				(await K.updated.check()) &&
				(await ae(u));
		if (((s.length = 0), (w = !1), (g = !0), i && i.details)) {
			const { details: b } = i,
				v = b.replaceState ? 0 : 1;
			(b.state[C] = U += v), history[b.replaceState ? 'replaceState' : 'pushState'](b.state, '', u);
		}
		if (((o = null), h)) {
			(n = _.state), _.props.page && (_.props.page.url = u);
			const b = ie();
			S.$set(_.props), b();
		} else je(_);
		if (i) {
			const { scroll: b, keepfocus: v } = i;
			if (!v) {
				const O = document.body,
					I = O.getAttribute('tabindex');
				(O.tabIndex = -1),
					O.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var $;
						($ = getSelection()) == null || $.removeAllRanges();
					}),
					I !== null ? O.setAttribute('tabindex', I) : O.removeAttribute('tabindex');
			}
			if ((await Be(), d)) {
				const O = u.hash && document.getElementById(u.hash.slice(1));
				b ? scrollTo(b.x, b.y) : O ? O.scrollIntoView() : scrollTo(0, 0);
			}
		} else await Be();
		(d = !0), _.props.page && (T = _.props.page), m && m(), (g = !1);
	}
	function je(a) {
		var c, m;
		n = a.state;
		const u = document.querySelector('style[data-sveltekit]');
		u && u.remove(), (T = a.props.page);
		const p = ie();
		(S = new Lt({ target: r, props: { ...a.props, stores: K }, hydrate: !0 })), p();
		const i = {
			from: null,
			to: se('to', {
				params: n.params,
				routeId: (m = (c = n.route) == null ? void 0 : c.id) != null ? m : null,
				url: new URL(location.href)
			}),
			type: 'load'
		};
		l.after_navigate.forEach((_) => _(i)), (h = !0);
	}
	async function Q({ url: a, params: u, branch: p, status: i, error: c, route: m, form: _ }) {
		var I;
		const k = p.filter(Boolean),
			E = {
				type: 'loaded',
				state: { url: a, params: u, branch: p, error: c, route: m },
				props: { components: k.map(($) => $.node.component) }
			};
		_ !== void 0 && (E.props.form = _);
		let b = {},
			v = !T;
		for (let $ = 0; $ < k.length; $ += 1) {
			const P = k[$];
			(b = { ...b, ...P.data }),
				(v || !n.branch.some((N) => N === P)) &&
					((E.props[`data_${$}`] = b),
					(v = v || Object.keys((I = P.data) != null ? I : {}).length > 0));
		}
		if (
			(v || (v = Object.keys(T.data).length !== Object.keys(b).length),
			!n.url || a.href !== n.url.href || n.error !== c || _ !== void 0 || v)
		) {
			E.props.page = {
				error: c,
				params: u,
				routeId: m && m.id,
				status: i,
				url: a,
				form: _,
				data: v ? b : T.data
			};
			const $ = (P, N) => {
				Object.defineProperty(E.props.page, P, {
					get: () => {
						throw new Error(`$page.${P} has been replaced by $page.url.${N}`);
					}
				});
			};
			$('origin', 'origin'), $('path', 'pathname'), $('query', 'searchParams');
		}
		return E;
	}
	async function he({ loader: a, parent: u, url: p, params: i, routeId: c, server_data_node: m }) {
		var b, v, O, I, $;
		let _ = null;
		const k = { dependencies: new Set(), params: new Set(), parent: !1, url: !1 },
			E = await a();
		if ((b = E.shared) != null && b.load) {
			let P = function (...L) {
				for (const y of L) {
					const { href: R } = new URL(y, p);
					k.dependencies.add(R);
				}
			};
			const N = {
				routeId: c,
				params: new Proxy(i, { get: (L, y) => (k.params.add(y), L[y]) }),
				data: (v = m == null ? void 0 : m.data) != null ? v : null,
				url: pt(p, () => {
					k.url = !0;
				}),
				async fetch(L, y) {
					let R;
					L instanceof Request
						? ((R = L.url),
						  (y = {
								body: L.method === 'GET' || L.method === 'HEAD' ? void 0 : await L.blob(),
								cache: L.cache,
								credentials: L.credentials,
								headers: L.headers,
								integrity: L.integrity,
								keepalive: L.keepalive,
								method: L.method,
								mode: L.mode,
								redirect: L.redirect,
								referrer: L.referrer,
								referrerPolicy: L.referrerPolicy,
								signal: L.signal,
								...y
						  }))
						: (R = L);
					const j = new URL(R, p).href;
					return P(j), h ? _t(j, y) : mt(R, j, y);
				},
				setHeaders: () => {},
				depends: P,
				parent() {
					return (k.parent = !0), u();
				}
			};
			Object.defineProperties(N, {
				props: {
					get() {
						throw new Error(
							'@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				},
				session: {
					get() {
						throw new Error(
							'session is no longer available. See https://github.com/sveltejs/kit/discussions/5883'
						);
					},
					enumerable: !1
				},
				stuff: {
					get() {
						throw new Error(
							'@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				}
			}),
				(_ = (O = await E.shared.load.call(null, N)) != null ? O : null),
				(_ = _ ? await Tt(_) : null);
		}
		return {
			node: E,
			loader: a,
			server: m,
			shared: (I = E.shared) != null && I.load ? { type: 'data', data: _, uses: k } : null,
			data: ($ = _ != null ? _ : m == null ? void 0 : m.data) != null ? $ : null
		};
	}
	function Pe(a, u, p, i) {
		if (w) return !0;
		if (!p) return !1;
		if ((p.parent && u) || (p.url && a)) return !0;
		for (const c of p.params) if (i[c] !== n.params[c]) return !0;
		for (const c of p.dependencies) if (s.some((m) => m(new URL(c)))) return !0;
		return !1;
	}
	function me(a, u) {
		var p, i;
		return (a == null ? void 0 : a.type) === 'data'
			? {
					type: 'data',
					data: a.data,
					uses: {
						dependencies: new Set((p = a.uses.dependencies) != null ? p : []),
						params: new Set((i = a.uses.params) != null ? i : []),
						parent: !!a.uses.parent,
						url: !!a.uses.url
					}
			  }
			: (a == null ? void 0 : a.type) === 'skip' && u != null
			? u
			: null;
	}
	async function Ne({ id: a, invalidating: u, url: p, params: i, route: c }) {
		var L;
		if ((o == null ? void 0 : o.id) === a) return o.promise;
		const { errors: m, layouts: _, leaf: k } = c,
			E = [..._, k];
		m.forEach((y) => (y == null ? void 0 : y().catch(() => {}))),
			E.forEach((y) => (y == null ? void 0 : y[1]().catch(() => {})));
		let b = null;
		const v = n.url ? a !== n.url.pathname + n.url.search : !1,
			O = E.reduce((y, R, j) => {
				var x;
				const A = n.branch[j],
					H =
						!!(R != null && R[0]) &&
						((A == null ? void 0 : A.loader) !== R[1] ||
							Pe(v, y.some(Boolean), (x = A.server) == null ? void 0 : x.uses, i));
				return y.push(H), y;
			}, []);
		if (O.some(Boolean)) {
			try {
				b = await He(p, O);
			} catch (y) {
				return re({
					status: 500,
					error: ee(y, { url: p, params: i, routeId: c.id }),
					url: p,
					routeId: c.id
				});
			}
			if (b.type === 'redirect') return b;
		}
		const I = b == null ? void 0 : b.nodes;
		let $ = !1;
		const P = E.map(async (y, R) => {
			var x;
			if (!y) return;
			const j = n.branch[R],
				A = I == null ? void 0 : I[R];
			if (
				(!A || A.type === 'skip') &&
				y[1] === (j == null ? void 0 : j.loader) &&
				!Pe(v, $, (x = j.shared) == null ? void 0 : x.uses, i)
			)
				return j;
			if ((($ = !0), (A == null ? void 0 : A.type) === 'error')) throw A;
			return he({
				loader: y[1],
				url: p,
				params: i,
				routeId: c.id,
				parent: async () => {
					var Ce;
					const qe = {};
					for (let ye = 0; ye < R; ye += 1)
						Object.assign(qe, (Ce = await P[ye]) == null ? void 0 : Ce.data);
					return qe;
				},
				server_data_node: me(
					A === void 0 && y[0] ? { type: 'skip' } : A != null ? A : null,
					j == null ? void 0 : j.server
				)
			});
		});
		for (const y of P) y.catch(() => {});
		const N = [];
		for (let y = 0; y < E.length; y += 1)
			if (E[y])
				try {
					N.push(await P[y]);
				} catch (R) {
					if (R instanceof Me) return { type: 'redirect', location: R.location };
					let j = 500,
						A;
					I != null && I.includes(R)
						? ((j = (L = R.status) != null ? L : j), (A = R.error))
						: R instanceof ke
						? ((j = R.status), (A = R.body))
						: (A = ee(R, { params: i, url: p, routeId: c.id }));
					const H = await Ue(y, N, m);
					return H
						? await Q({
								url: p,
								params: i,
								branch: N.slice(0, H.idx).concat(H.node),
								status: j,
								error: A,
								route: c
						  })
						: await De(p, c.id, A, j);
				}
			else N.push(void 0);
		return await Q({
			url: p,
			params: i,
			branch: N,
			status: 200,
			error: null,
			route: c,
			form: u ? void 0 : null
		});
	}
	async function Ue(a, u, p) {
		for (; a--; )
			if (p[a]) {
				let i = a;
				for (; !u[i]; ) i -= 1;
				try {
					return {
						idx: i + 1,
						node: { node: await p[a](), loader: p[a], data: {}, server: null, shared: null }
					};
				} catch {
					continue;
				}
			}
	}
	async function re({ status: a, error: u, url: p, routeId: i }) {
		var b;
		const c = {},
			m = await Re();
		let _ = null;
		if (m.server)
			try {
				const v = await He(p, [!0]);
				if (v.type !== 'data' || (v.nodes[0] && v.nodes[0].type !== 'data')) throw 0;
				_ = (b = v.nodes[0]) != null ? b : null;
			} catch {
				(p.origin !== location.origin || p.pathname !== location.pathname || f) && (await ae(p));
			}
		const k = await he({
				loader: Re,
				url: p,
				params: c,
				routeId: i,
				parent: () => Promise.resolve({}),
				server_data_node: me(_)
			}),
			E = { node: await Se(), loader: Se, shared: null, server: null, data: null };
		return await Q({ url: p, params: c, branch: [k, E], status: a, error: u, route: null });
	}
	function _e(a, u) {
		if (Te(a)) return;
		const p = decodeURI(a.pathname.slice(e.length) || '/');
		for (const i of oe) {
			const c = i.exec(p);
			if (c) {
				const m = new URL(a.origin + ct(a.pathname, t) + a.search + a.hash);
				return { id: m.pathname + m.search, invalidating: u, route: i, params: ft(c), url: m };
			}
		}
	}
	function Te(a) {
		return a.origin !== location.origin || !a.pathname.startsWith(e);
	}
	async function ge({
		url: a,
		scroll: u,
		keepfocus: p,
		redirect_chain: i,
		details: c,
		type: m,
		delta: _,
		nav_token: k,
		accepted: E,
		blocked: b
	}) {
		var P, N, L, y;
		let v = !1;
		const O = _e(a, !1),
			I = {
				from: se('from', {
					params: n.params,
					routeId: (N = (P = n.route) == null ? void 0 : P.id) != null ? N : null,
					url: n.url
				}),
				to: se('to', {
					params: (L = O == null ? void 0 : O.params) != null ? L : null,
					routeId: (y = O == null ? void 0 : O.route.id) != null ? y : null,
					url: a
				}),
				type: m
			};
		_ !== void 0 && (I.delta = _);
		const $ = {
			...I,
			cancel: () => {
				v = !0;
			}
		};
		if ((l.before_navigate.forEach((R) => R($)), v)) {
			b();
			return;
		}
		be(U),
			E(),
			h && K.navigating.set(I),
			await Ae(O, a, i, { scroll: u, keepfocus: p, details: c }, k, () => {
				l.after_navigate.forEach((R) => R(I)), K.navigating.set(null);
			});
	}
	async function De(a, u, p, i) {
		return a.origin === location.origin && a.pathname === location.pathname && !f
			? await re({ status: i, error: p, url: a, routeId: u })
			: await ae(a);
	}
	function ae(a) {
		return (location.href = a.href), new Promise(() => {});
	}
	return {
		after_navigate: (a) => {
			ve(
				() => (
					l.after_navigate.push(a),
					() => {
						const u = l.after_navigate.indexOf(a);
						l.after_navigate.splice(u, 1);
					}
				)
			);
		},
		before_navigate: (a) => {
			ve(
				() => (
					l.before_navigate.push(a),
					() => {
						const u = l.before_navigate.indexOf(a);
						l.before_navigate.splice(u, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(g || !h) && (d = !1);
		},
		goto: (a, u = {}) => de(a, u, []),
		invalidate: (a) => {
			if (a === void 0)
				throw new Error(
					'`invalidate()` (with no arguments) has been replaced by `invalidateAll()`'
				);
			if (typeof a == 'function') s.push(a);
			else {
				const { href: u } = new URL(a, location.href);
				s.push((p) => p.href === u);
			}
			return Ie();
		},
		invalidateAll: () => ((w = !0), Ie()),
		prefetch: async (a) => {
			const u = new URL(a, Fe(document));
			await $e(u);
		},
		prefetch_routes: async (a) => {
			const p = (a ? oe.filter((i) => a.some((c) => i.exec(c))) : oe).map((i) =>
				Promise.all([...i.layouts, i.leaf].map((c) => (c == null ? void 0 : c[1]())))
			);
			await Promise.all(p);
		},
		apply_action: async (a) => {
			if (a.type === 'error') {
				const u = new URL(location.href),
					{ branch: p, route: i } = n;
				if (!i) return;
				const c = await Ue(n.branch.length, p, i.errors);
				if (c) {
					const m = await Q({
						url: u,
						params: n.params,
						branch: p.slice(0, c.idx).concat(c.node),
						status: 500,
						error: a.error,
						route: i
					});
					n = m.state;
					const _ = ie();
					S.$set(m.props), _();
				}
			} else if (a.type === 'redirect') de(a.location, {}, []);
			else {
				const u = { form: a.data, page: { ...T, form: a.data, status: a.status } },
					p = ie();
				S.$set(u), p();
			}
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (i) => {
					var _, k;
					let c = !1;
					const m = {
						from: se('from', {
							params: n.params,
							routeId: (k = (_ = n.route) == null ? void 0 : _.id) != null ? k : null,
							url: n.url
						}),
						to: null,
						type: 'unload',
						cancel: () => (c = !0)
					};
					l.before_navigate.forEach((E) => E(m)),
						c ? (i.preventDefault(), (i.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						be(U);
						try {
							sessionStorage[We] = JSON.stringify(te);
						} catch {}
					}
				});
			const a = (i) => {
				const { url: c, options: m } = Je(i);
				if (c && m.prefetch) {
					if (Te(c)) return;
					$e(c);
				}
			};
			let u;
			const p = (i) => {
				clearTimeout(u),
					(u = setTimeout(() => {
						var c;
						(c = i.target) == null ||
							c.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', a),
				addEventListener('mousemove', p),
				addEventListener('sveltekit:trigger_prefetch', a),
				addEventListener('click', (i) => {
					if (
						i.button ||
						i.which !== 1 ||
						i.metaKey ||
						i.ctrlKey ||
						i.shiftKey ||
						i.altKey ||
						i.defaultPrevented
					)
						return;
					const { a: c, url: m, options: _ } = Je(i);
					if (!c || !m) return;
					const k = c instanceof SVGAElement;
					if (!k && !(m.protocol === 'https:' || m.protocol === 'http:')) return;
					const E = (c.getAttribute('rel') || '').split(/\s+/);
					if (
						c.hasAttribute('download') ||
						E.includes('external') ||
						_.reload ||
						(k ? c.target.baseVal : c.target)
					)
						return;
					const [b, v] = m.href.split('#');
					if (v !== void 0 && b === location.href.split('#')[0]) {
						(V = !0), be(U), (n.url = m), K.page.set({ ...T, url: m }), K.page.notify();
						return;
					}
					ge({
						url: m,
						scroll: _.noscroll ? Ee() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: m.href === location.href },
						accepted: () => i.preventDefault(),
						blocked: () => i.preventDefault(),
						type: 'link'
					});
				}),
				addEventListener('popstate', (i) => {
					if (i.state) {
						if (i.state[C] === U) return;
						const c = i.state[C] - U;
						ge({
							url: new URL(location.href),
							scroll: te[i.state[C]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								U = i.state[C];
							},
							blocked: () => {
								history.go(-c);
							},
							type: 'popstate',
							delta: c
						});
					}
				}),
				addEventListener('hashchange', () => {
					V && ((V = !1), history.replaceState({ ...history.state, [C]: ++U }, '', location.href));
				});
			for (const i of document.querySelectorAll('link')) i.rel === 'icon' && (i.href = i.href);
			addEventListener('pageshow', (i) => {
				i.persisted && K.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: a,
			error: u,
			node_ids: p,
			params: i,
			routeId: c,
			data: m,
			form: _
		}) => {
			var b;
			f = !0;
			const k = new URL(location.href);
			let E;
			try {
				const v = p.map(async (O, I) => {
					const $ = m[I];
					return he({
						loader: pe[O],
						url: k,
						params: i,
						routeId: c,
						parent: async () => {
							const P = {};
							for (let N = 0; N < I; N += 1) Object.assign(P, (await v[N]).data);
							return P;
						},
						server_data_node: me($)
					});
				});
				E = await Q({
					url: k,
					params: i,
					branch: await Promise.all(v),
					status: a,
					error: u,
					form: _,
					route: (b = oe.find((O) => O.id === c)) != null ? b : null
				});
			} catch (v) {
				if (v instanceof Me) {
					await ae(new URL(v.location, location.href));
					return;
				}
				E = await re({
					status: v instanceof ke ? v.status : 500,
					error: ee(v, { url: k, params: i, routeId: c }),
					url: k,
					routeId: c
				});
			}
			je(E);
		}
	};
}
async function He(r, e) {
	const t = new URL(r);
	t.pathname = r.pathname.replace(/\/$/, '') + Ut;
	const s = await ue(t.href, {
			headers: { 'x-sveltekit-invalidated': e.map((l) => (l ? '1' : '')).join(',') }
		}),
		o = await s.text();
	if (!s.ok) throw new Error(JSON.parse(o));
	return Jt(o);
}
function ee(r, e) {
	var t;
	return r instanceof ke
		? r.body
		: (t = Nt.handleError({ error: r, event: e })) != null
		? t
		: { message: e.routeId != null ? 'Internal Error' : 'Not Found' };
}
const Kt = [
	'hash',
	'href',
	'host',
	'hostname',
	'origin',
	'pathname',
	'port',
	'protocol',
	'search',
	'searchParams',
	'toString',
	'toJSON'
];
function se(r, e) {
	for (const t of Kt)
		Object.defineProperty(e, t, {
			get() {
				throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`);
			},
			enumerable: !1
		});
	return e;
}
function ie() {
	return () => {};
}
async function Ht({ env: r, hydrate: e, paths: t, target: s, trailing_slash: o }) {
	it(t);
	const l = Gt({ target: s, base: t.base, trailing_slash: o });
	lt({ client: l }),
		e ? await l._hydrate(e) : l.goto(location.href, { replaceState: !0 }),
		l._start_router();
}
export { Ht as start };
