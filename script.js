/* ====== EDIT THESE ====== */
var WHATSAPP = "https://wa.me/201014200259"; // your number, country code first, digits only
var LINKS = {
  li: "https://www.linkedin.com/in/akram-elgamaal-b6287b441",
  ig: "https://www.instagram.com/eyesofaqua",
  be: "https://www.behance.net/akramelgamaal",
};
/* images: paths relative to index.html. Optional extra fields per project: year, role, deliv, result, process:[{img,title,note}], variants:[paths], mockups:[paths]. Sections without data stay hidden. */
var PROJECTS = [
  {
    t: "Self Harm Awareness Month\n(2nd post)",
    cat: "IFMSA-Egypt",
    c: "Continuing the campaign to put a spotlight on important statistics in Egypt and worldwide.",
    images: [
      "images/selfharm-2nd-post/01.jpg",
      "images/selfharm-2nd-post/02.jpg",
      "images/selfharm-2nd-post/03.jpg",
      "images/selfharm-2nd-post/04.jpg",
      "images/selfharm-2nd-post/05.jpg",
      "images/selfharm-2nd-post/06.jpg",
      "images/selfharm-2nd-post/07.jpg",
      "images/selfharm-2nd-post/08.jpg",
    ],
  },
  {
    t: "Self Harm Awareness Month\n(1st post)",
    cat: "IFMSA-Egypt",
    c: "In collaboration with SWG teammates, we researched some examples from Egyptian cinema to support our vision about such a concerning topic.",
    images: [
      "images/selfharm-1st-post/01.webp",
      "images/selfharm-1st-post/02.webp",
      "images/selfharm-1st-post/03.webp",
      "images/selfharm-1st-post/04.webp",
      "images/selfharm-1st-post/05.webp",
      "images/selfharm-1st-post/06.webp",
      "images/selfharm-1st-post/07.webp",
      "images/selfharm-1st-post/08.webp",
      "images/selfharm-1st-post/09.webp",
    ],
  },
  {
    t: "Shouman Summer Training 2026",
    cat: "MSSA-mansoura",
    c: "The most remarkable highlight of my career with MSSA-mansoura so far. A 13 single-paged-post campaign to engage members and trainees and encourage them to be part of the process and gain clinical experience. The campaign was appreciated and caught eyes.",
    images: [
      "images/shouman-summer-training-2026/01.webp",
      "images/shouman-summer-training-2026/02.webp",
      "images/shouman-summer-training-2026/03.webp",
      "images/shouman-summer-training-2026/04.webp",
      "images/shouman-summer-training-2026/05.webp",
      "images/shouman-summer-training-2026/06.webp",
      "images/shouman-summer-training-2026/07.webp",
      "images/shouman-summer-training-2026/08.webp",
      "images/shouman-summer-training-2026/09.webp",
      "images/shouman-summer-training-2026/10.webp",
      "images/shouman-summer-training-2026/11.webp",
      "images/shouman-summer-training-2026/12.webp",
    ],
  },
  {
    t: "Blood Donation day",
    cat: "MSSA-mansoura",
    c: "1 donation = up to 3 lives saved.",
    images: [
      "images/blood-donation-day/01.webp",
      "images/blood-donation-day/02.webp",
      "images/blood-donation-day/03.webp",
      "images/blood-donation-day/04.webp",
    ],
  },
  {
    t: "Zero Discrimination day",
    cat: "MSSA-mansoura",
    c: "Discrimination is one of the most concerning issues that the audience need to be oriented about.",
    images: [
      "images/zero-discrimination-day/01.webp",
      "images/zero-discrimination-day/02.webp",
      "images/zero-discrimination-day/03.webp",
      "images/zero-discrimination-day/04.webp",
      "images/zero-discrimination-day/05.webp",
      "images/zero-discrimination-day/06.webp",
    ],
  },
  {
    t: "Universal Health Coverage",
    cat: "MSSA-mansoura",
    c: "This is the third post of a very important campaign that was designed in collaboration with other highly skilled teammates.",
    images: [
      "images/universal-health-coverage/01.webp",
      "images/universal-health-coverage/02.webp",
      "images/universal-health-coverage/03.webp",
      "images/universal-health-coverage/04.webp",
      "images/universal-health-coverage/05.webp",
    ],
  },
  {
    t: "16 DoA against GBV (extra)",
    cat: "MSSA-mansoura",
    c: "Another post from the 16 Days of Activism campaign for MSSA-mansoura.",
    images: [
      "images/16doa-against-gbv-extra/01.webp",
      "images/16doa-against-gbv-extra/02.webp",
      "images/16doa-against-gbv-extra/03.webp",
      "images/16doa-against-gbv-extra/04.webp",
      "images/16doa-against-gbv-extra/05.webp",
    ],
  },
  {
    t: "16 DoA against GBV",
    cat: "MSSA-mansoura",
    c: "Aiming to increase awareness about GBV, I worked on a campaign to call for activism and this is its first post.",
    images: [
      "images/16doa-against-gbv/01.webp",
      "images/16doa-against-gbv/02.webp",
      "images/16doa-against-gbv/03.webp",
      "images/16doa-against-gbv/04.webp",
      "images/16doa-against-gbv/05.webp",
      "images/16doa-against-gbv/06.webp",
      "images/16doa-against-gbv/07.webp",
    ],
  },
  {
    t: "International Tolerance day",
    cat: "MSSA-mansoura",
    c: "My first project for MSSA-mansoura to celebrate the international day of tolerance on November 16th.",
    images: [
      "images/international-tolerance-day/01.webp",
      "images/international-tolerance-day/02.webp",
      "images/international-tolerance-day/03.webp",
      "images/international-tolerance-day/04.webp",
      "images/international-tolerance-day/05.webp",
      "images/international-tolerance-day/06.webp",
      "images/international-tolerance-day/07.webp",
    ],
  },
  {
    t: "Luna Dulces",
    cat: "Brand Identities",
    c: "Full brand identity for a Patisserie.",
    images: [
      "images/luna-dulces/01.png",
      "images/luna-dulces/02.png",
      "images/luna-dulces/03.png",
      "images/luna-dulces/04.png",
      "images/luna-dulces/05.png",
      "images/luna-dulces/06.png",
    ],
  },
];
/* ======================== */

function $(i) {
  return document.getElementById(i);
}
function slugOf(p) {
  return p.images[0].split("/")[1];
} /* image folder name = project id */
function nm(p) {
  return p.t.replace(/\n/g, " ");
}
function wide(p) {
  return p.cat === "Brand Identities";
}
function img(s, a) {
  return '<img src="' + s + '" alt="' + a + '" decoding="async">';
}
function sec(t, h) {
  return h
    ? '<section class="block"><h2>' + t + "</h2>" + h + "</section>"
    : "";
}
function tiles(a, t) {
  return a && a.length
    ? '<div class="tiles">' +
    a
      .map(function(s, k) {
        return '<div class="tile">' + img(s, t + " " + (k + 1)) + "</div>";
      })
      .join("") +
    "</div>"
    : "";
}
var L = { wa: WHATSAPP, li: LINKS.li, ig: LINKS.ig, be: LINKS.be };
document.querySelectorAll("[data-link]").forEach(function(a) {
  a.href = L[a.dataset.link];
});

if ($("grid")) {
  /* home: project cards + brief form (opens WhatsApp with the message filled in) */
  $("grid").innerHTML = PROJECTS.map(function(p) {
    return (
      '<article class="card glass' +
      (wide(p) ? " wide" : "") +
      '"><a href="project.html?p=' +
      slugOf(p) +
      '"><div class="thumb">' +
      img(p.images[0], nm(p) + " cover") +
      "</div>" +
      '<div class="meta"><h3>' +
      p.t.replace(/\n/g, "<br>") +
      "</h3><p>" +
      p.cat +
      "</p></div></a></article>"
    );
  }).join("");
  $("brief").addEventListener("submit", function(e) {
    e.preventDefault();
    var f = new FormData(e.target);
    var msg =
      "Hi Aqua, I'd like to start a project.\nName: " +
      f.get("name") +
      "\nContact: " +
      f.get("contact") +
      "\nType: " +
      f.get("type") +
      "\n\n" +
      f.get("message");
    window.open(
      WHATSAPP + "?text=" + encodeURIComponent(msg),
      "_blank",
      "noopener",
    );
  });
} else if ($("project")) {
  var q = new URLSearchParams(location.search).get("p");
  var i = PROJECTS.findIndex(function(p) {
    return slugOf(p) === q;
  });
  if (i < 0) {
    $("project").innerHTML =
      '<div class="ph-head"><h1>Project not found</h1><p><a href="index.html#work">Back to all projects</a></p></div>';
  } else {
    var p = PROJECTS[i],
      t = nm(p),
      nx = PROJECTS[(i + 1) % PROJECTS.length],
      parts = p.t.split("\n"),
      all = p.images;
    document.title = t + " — Aqua";
    document.querySelector("meta[name=description]").content = p.c;
    var meta = [
      ["Category", p.cat],
      ["Year", p.year],
      ["Role", p.role],
      ["Deliverables", p.deliv],
      ["Pieces", all.length],
    ]
      .filter(function(m) {
        return m[1];
      })
      .map(function(m) {
        return "<div><dt>" + m[0] + "</dt><dd>" + m[1] + "</dd></div>";
      })
      .join("");
    var shot = function(k) {
      return (
        '<button type="button" class="shot" data-i="' +
        k +
        '" aria-label="Enlarge image ' +
        (k + 1) +
        '">' +
        img(all[k], t + ", image " + (k + 1)) +
        "</button>"
      );
    };
    var gal = all
      .slice(1)
      .map(function(s, k) {
        return shot(k + 1);
      })
      .join("");
    var steps =
      p.process && p.process.length
        ? '<ol class="steps">' +
        p.process
          .map(function(s) {
            return (
              '<li><div class="tile">' +
              img(s.img, s.title) +
              "</div><h3>" +
              s.title +
              "</h3><p>" +
              s.note +
              "</p></li>"
            );
          })
          .join("") +
        "</ol>"
        : "";
    $("project").innerHTML =
      '<header class="ph-head"><a class="back" href="index.html#work">&larr; All projects</a><h1>' +
      parts[0] +
      (parts[1] ? "<small>" + parts[1] + "</small>" : "") +
      '</h1><dl class="meta-list">' +
      meta +
      "</dl></header>" +
      '<div class="hero-shot' +
      (wide(p) ? " wide" : "") +
      '">' +
      shot(0) +
      "</div>" +
      sec("About the project", "<p>" + p.c + "</p>") +
      sec("Design process", steps) +
      sec(
        "The designs",
        gal
          ? '<div class="gallery' +
          (wide(p) ? " wide" : "") +
          '">' +
          gal +
          "</div>"
          : "",
      ) +
      sec("Variants", tiles(p.variants, "Variant")) +
      sec("Mockups", tiles(p.mockups, "Mockup")) +
      sec("Result", p.result ? "<p>" + p.result + "</p>" : "") +
      '<a class="next glass" href="project.html?p=' +
      slugOf(nx) +
      '"><span>Next project</span><b>' +
      nm(nx) +
      "</b></a>" +
      '<section class="cta"><div class="cta-art" aria-hidden="true"></div><div class="cta-body"><h2>Want your brand to look this sharp?</h2><p>Tell me about your project and I will reply within 24 hours.</p><p style="margin-top:22px"><a class="btn" href="index.html#contact">Start a project</a></p></div></section>';
    var dlg = $("lb"),
      big = dlg.querySelector("img"),
      cur = 0,
      n = all.length;
    var show = function(k) {
      cur = (k + n) % n;
      big.src = all[cur];
      big.alt = t + ", image " + (cur + 1);
    };
    $("project").addEventListener("click", function(e) {
      var b = e.target.closest(".shot");
      if (b) {
        show(+b.dataset.i);
        dlg.showModal();
      }
    });
    dlg.addEventListener("click", function(e) {
      if (e.target.id === "lb-prev") show(cur - 1);
      else if (e.target.id === "lb-next") show(cur + 1);
      else dlg.close();
    });
    document.addEventListener("keydown", function(e) {
      if (!dlg.open) return;
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
  }
}
