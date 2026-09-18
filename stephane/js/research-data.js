// Research data (moved from the old js/script.js and patents.html).
// Add new entries at the top of each list.

const publications = [
    {
        year: "2024",
        title: "Label-free melanoma phenotype classification using AI-based morphological profiling",
        authors: "Lattmann E, Jovic A, Kim J, Pham T, Corona C, Lian Z, Saini K, Ray M, Lu V, Tastanova A, Boutet SC, Levesque MP",
        journal: "bioRxiv 2024.06.28.601235",
        doi: "https://doi.org/10.1101/2024.06.28.601235"
    },
    {
        year: "2024",
        title: "Deep learning-driven morphology analysis enables label-free classification of therapeutic agent-naive versus resistant cells",
        authors: "Jovic A, Saini K, Lian Z, Corona C, Pham T, Carelli R, Boutet SC, Ray M, Sethuraman S, Prindle V, Lattman E, Molvetti M-G, Dzung A, Levesque MP, Barnes M, Ramatthal C",
        journal: "Precision Oncology",
        status: "(Submitted)"
    },
    {
        year: "2023",
        title: "AI-driven morphology-based enrichment of malignant cells from body fluid",
        authors: "Mavropoulos A, Johnson C, Lu V, Nieto J, Schneider EC, Saini K, Phelan ML, Hsie LX, Wang MJ, Cruz J, Mei J, Kim JJ, Lian Z, Li N, Boutet SC, Wong-Thai AY, Yu W, Lu QY, Kim T, Geng Y, Masaeli MM, Lee TD, Rao J",
        journal: "Modern Pathology",
        volume: "36(8):100195",
        doi: "https://doi.org/10.1016/j.modpat.2023.100195"
    },
    {
        year: "2020",
        title: "Single-Cell Transcriptomics Reveals Early Emergence of Liver Parenchymal and Non-parenchymal Cell Lineages",
        authors: "Lotto J, Drissler S, Cullum R, Wei W, Setty M, Bell EM, Boutet SC, Nowotschin S, Kuo Y-Y, Garg V, Pe'er D, Church DM, Hadjantonakis A-K, Hoodless PA",
        journal: "Cell",
        volume: "183: 702-716",
        doi: "https://doi.org/10.1016/j.cell.2020.09.012"
    },
    {
        year: "2020",
        title: "Benchmarking Single-Cell RNA sequencing protocols for Cell Atlas Projects",
        authors: "Mereu E, Lafzi A, Moutinho C, Ziegenhain C, MacCarthy DJ, Alvarez A, Batlle E, Sagar, Grun D, Lau JK, Boutet SC, Sanada C, Ooi A, Jones RC, Kaihara K, Brampton C, Talaga Y, Sasagawa A, Tanaka K, Hayasho T, Nikaido I, Fischer C, Sauer S, Trezfer T, Conrad C, Adiconis X, Nguyen LT, Regev A, Levin JZ, Janjic A, Wange LE, Bagnoli JW, Enard W, Gut M, Sandberg R, Gut I, Stegle O, Heyn H",
        journal: "Nature Biotechnology",
        volume: "38(6):747-755",
        doi: "https://doi.org/10.1038/s41587-020-0469-4"
    },
    {
        year: "2019",
        title: "Single-cell analysis reveals T cell infiltration in old neurogenic niches",
        authors: "Dulken BW, Buckley MT, Navarro Negredo P, Saligrama N, Cayrol R, Leeman DS, George BM, Boutet SC, Hebestreit K, Pluvinage JV, Wyss-Coray T, Weissman IL, Vogel H, Davis MM, Brunet A",
        journal: "Nature",
        volume: "571: 205-210",
        doi: "https://doi.org/10.1038/s41586-019-1362-5"
    },
    {
        year: "2019",
        title: "The emergent landscape of the mouse gut endoderm at single cell resolution",
        authors: "Nowotschin S, Setty M, Kuo YY, Liu V, Garg V, Sharma R, Simon CS, Saiz N, Gardner R, Boutet SC, Church DM, Hoodless PA, Hadjantonakis A-K, Pe'er D",
        journal: "Nature",
        volume: "569: 361-367",
        doi: "https://doi.org/10.1038/s41586-019-1127-1"
    },
    {
        year: "2017",
        title: "Intestinal Enteroendocrine Lineage Cells Possess Homeostatic and Injury-Inducible Stem Cell Activity",
        authors: "Yan KS, Gevaert O, Zheng GXY, Anchang B, Probert CS, Larkin KA, Davies PS, Cheng ZF, Kaddis JS, Han A, Roelf K, Calderon RI, Cynn E, Hu X, Mandleywala K, Wilhelmy J, Grimes SM, Corney DC, Boutet SC, Terry JM, Belgrader P, Ziraldo SB, Mikkelsen TS, Wang F, von Furstenberg RJ, Smith NR, Chandrakesan P, May R, Chrissy MAS, Jain R, Cartwright CA, Niland JC, Hong YK, Carrington J, Breault DT, Epstein J, Houchen CW, Lynch JP, Martin MG, Plevritis SK, Curtis C, Ji HP, Li L, Henning SJ, Wong MH, Kuo CJ",
        journal: "Cell Stem Cell",
        volume: "21(1):78-90.e6",
        doi: "https://doi.org/10.1016/j.stem.2017.06.014"
    },
    {
        year: "2017",
        title: "Measuring Signaling and RNA-Seq in the Same Cell Links Gene Expression to Dynamic Patterns of NF-kB Activation",
        authors: "Lane KM, Van Valen D, DeFelice M, Macklin D, Jaimovich A, Carr A, Meyer T, Pe'er D, Boutet SC, Covert MW",
        journal: "Cell Systems",
        volume: "4: 1-12",
        doi: "https://doi.org/10.1016/j.cels.2017.03.010"
    },
    {
        year: "2017",
        title: "Single cell transcriptomic analysis defines heterogeneity and transcriptional dynamics in the adult neural stem cell lineage",
        authors: "Dulken BW, Leeman DS, Boutet SC, Hebestreit K, Brunet A",
        journal: "Cell Reports",
        volume: "18: 777-790",
        doi: "https://doi.org/10.1016/j.celrep.2016.12.060"
    },
    {
        year: "2017",
        title: "Single-cell protein-mRNA correlation analysis enabled by multiplexed dual-analyte co-detection",
        authors: "Gong H, Wang X, Liu B, Boutet SC, Holcomb IN, Dakshinamoorthy G, Ooi A, Sanada C, Sun G, Ramakrishnan R",
        journal: "Scientific Reports",
        volume: "7(1):2776",
        doi: "https://doi.org/10.1038/s41598-017-03057-5"
    },
    {
        year: "2017",
        title: "Developpement d'un microenvironment artificiel pour maintenir la quiescence et le potentiel therapeutique des cellules souches du muscle squelettique",
        authors: "Boutet SC, Quarta M",
        journal: "Medecine & Science (Paris)",
        volume: "33(3):341-344",
        doi: "https://doi.org/10.1051/medsci/20173303023"
    },
    {
        year: "2016",
        title: "An artificial niche preserves the quiescence of muscle stem cells and enhances their therapeutic efficacy",
        authors: "Quarta M, Brett JO, DiMarco R, De Morree A, Boutet SC, Chacon R, Gibbons MC, Garcia VA, Su J, Shrager JB, Heilshorn S, Rando TA",
        journal: "Nature Biotechnology",
        volume: "34: 752-759",
        doi: "https://doi.org/10.1038/nbt.3576"
    },
    {
        year: "2014",
        title: "The eSNV-Detect: A computational system to identify expressed single nucleotide variants from transcriptome sequencing data",
        authors: "Tang X, Baheti S, Khader S, Thompson KJ, Wills Q, Niu N, Ramakrishnan R, Holcomb IN, Boutet SC, Kachergus JM, Richard W, Wang L, Thompson AE, Kalari KR",
        journal: "Nucl. Acids Res.",
        volume: "42(22): e172",
        doi: "https://doi.org/10.1093/nar/gku1005"
    },
    {
        year: "2012",
        title: "Alternative polyadenylation mediates microRNA regulation of muscle stem cell function",
        authors: "Boutet SC, Cheung T, Quach NL, Prescott SL, Edalati A, Iori K, Rando TA",
        journal: "Cell Stem Cell",
        volume: "10(3): 327-336",
        doi: "https://doi.org/10.1016/j.stem.2012.01.017"
    },
    {
        year: "2010",
        title: "Taf1 regulates the degradation of Pax3 by monoubiquitination in muscle progenitors",
        authors: "Boutet SC, Biressi S, Iori K, Natu V, Rando TA",
        journal: "Molecular Cell",
        volume: "40(5): 749-761",
        doi: "https://doi.org/10.1016/j.molcel.2010.09.029"
    },
    {
        year: "2008",
        title: "Degradation proteasomique de Pax3 dans les cellules progenitrices musculaires: une ubiquitine fait l'affaire!",
        authors: "Boutet SC, Rando TA",
        journal: "Medecine & Science (Paris)",
        volume: "24(1):31-3",
        doi: "https://doi.org/10.1051/medsci/200824131"
    },
    {
        year: "2007",
        title: "Regulation of Pax3 by proteasomal degradation of mono-ubiquitinated protein in skeletal muscle progenitors",
        authors: "Boutet SC, Disatnik MH, Chan LS, Iori K, Rando TA",
        journal: "Cell",
        volume: "130(2): 349-362",
        doi: "https://doi.org/10.1016/j.cell.2007.05.044"
    },
    {
        year: "2004",
        title: "The bi-directional translocation of MARCKS between membrane and cytosol regulates integrin-mediated muscle cell spreading",
        authors: "Disatnik MH, Boutet SC, Pacio W, Chan AY, Ross LB, Lee CH, Rando TA",
        journal: "J Cell Sci.",
        volume: "117(Pt 19): 4469-79",
        doi: "https://doi.org/10.1242/jcs.01309"
    },
    {
        year: "2002",
        title: "Sequential activation of individual PKC isozymes in integrin-mediated muscle cell spreading: a role for MARCKS in an integrin signaling pathway",
        authors: "Disatnik MH, Boutet SC, Lee CH, Mochly-Rosen D, Rando TA",
        journal: "J Cell Sci.",
        volume: "115(Pt 10): 2151-63",
        doi: "https://doi.org/10.1242/jcs.115.10.2151"
    },
    {
        year: "2002",
        title: "Molecular Biology of vascular remodeling",
        authors: "Tsao P, Wohlgemuth J, Rezaee M, Johnson FL, Boutet SC, Fadel BM, Quertermous T",
        journal: "In: Lanzer P., Topol E.J. Eds. Principles and Practice of Panvascular Medicine, 1st edition. Berlin: Springer Verlag.",
        doi: ""
    },
    {
        year: "2001",
        title: "Identification of an octamer element required for the in vivo expression of the TIE-1 gene in endothelial cells",
        authors: "Boutet SC, Quertermous T, Fadel BM",
        journal: "Biochem. J.",
        volume: "360:23-29",
        doi: "https://doi.org/10.1042/0264-6021:3600023"
    },
    {
        year: "2000",
        title: "Endothelial cell-specific regulation of the murine endothelin-1 gene",
        authors: "Fadel BM, Boutet SC, Quertermous T",
        journal: "J Cardiovasc Pharmacol.",
        volume: "35(4 Suppl 2): S7-11",
        doi: "https://doi.org/10.1097/00005344-200000002-00003"
    },
    {
        year: "1999",
        title: "Octamer-dependent in vivo expression of the endothelial cell-specific TIE2 gene",
        authors: "Fadel BM, Boutet SC, Quertermous T",
        journal: "J Biol Chem.",
        volume: "274(29):20376-83",
        doi: "https://doi.org/10.1074/jbc.274.29.20376"
    },
    {
        year: "1999",
        title: "Failure of T lymphocytes from elderly humans to enter the cell cycle is associated with low CDK6 activity and impaired phosphorylation of Rb protein",
        authors: "Arbogast A, Boutet S, Phelouzat MA, Plastre O, Quadri AA, Proust JJ",
        journal: "Cell. Immunol.",
        volume: "197(1): 46-54",
        doi: "https://doi.org/10.1006/cimm.1999.1550"
    },
    {
        year: "1998",
        title: "Functional analysis of the endothelial cell-specific Tie2/Tek promoter identifies unique protein-binding elements",
        authors: "Fadel BM, Boutet SC, Quertermous T",
        journal: "Biochem J.",
        volume: "330 (Pt 1):335-43",
        doi: "https://doi.org/10.1042/bj3300335"
    },
    {
        year: "1998",
        title: "Age-associated decline in cdk1 activity delays cell cycle progression of human T lymphocytes",
        authors: "Quadri RA, Arbogast A, Phelouzat MA, Boutet S, Plastre O, Proust JJ",
        journal: "J Immunol.",
        volume: "161(10):5203-9",
        doi: "https://doi.org/10.4049/jimmunol.161.10.5203"
    },
    {
        year: "1997",
        title: "Susceptibility to apoptosis of T lymphocytes from elderly humans is associated with increased in vivo expression of functional Fas receptors",
        authors: "Phelouzat MA, Laforge T, Arbogast A, Quadri RA, Boutet S, Proust JJ",
        journal: "Mech Ageing Dev.",
        volume: "96(1-3):35-46",
        doi: "https://doi.org/10.1016/s0047-6374(97)01883-6"
    }
];

const patents = [
    {
        year: "2025",
        title: "Analyzing cell phenotypes",
        inventors: "Boutet SC, Jovic A, Carelli RC",
        patentNumber: "US-20250191680-A1",
        status: "Pending"
    },
    {
        year: "2025",
        title: "Method for transposase-mediated spatial tagging and analyzing genomic DNA in a biological sample",
        inventors: "Schnall-Levin M, Lucero MY, Mikkelsen TS, Stahl P, Frisen J, Marklund M, Bodadilla EL, Iyer EPR, Frenz L, Tentori AM, Bharadwaj R, Kvastad L, Lundeberg J, Villacampa EG, Yin Y, Bent Z, Chew J, Frey MLF, Hindson B, Boutet SC, Pfeiffer K",
        patentNumber: "US-20250146057-A1",
        status: "Pending"
    },
    {
        year: "2025",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-20250027150-A1",
        status: "Pending"
    },
    {
        year: "2024",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-12110549-B2",
        status: "Granted"
    },
    {
        year: "2024",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-12084716-B2",
        status: "Granted"
    },
    {
        year: "2024",
        title: "Methods, devices, and kits for purifying and lysing biological particles",
        inventors: "Boutet SC, Salmanzadeh A, Gibbons M",
        patentNumber: "US-20240210290-A1",
        status: "Pending"
    },
    {
        year: "2024",
        title: "Solid state single cell method for analyzing fixed biological cells",
        inventors: "Boutet SC",
        patentNumber: "US-20240191286-A1",
        status: "Pending"
    },
    {
        year: "2024",
        title: "Solid state single cell method for analyzing fixed biological cells",
        inventors: "Boutet SC",
        patentNumber: "US-11926863-B1",
        status: "Granted"
    },
    {
        year: "2023",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-20230203577-A1",
        status: "Pending"
    },
    {
        year: "2022",
        title: "Methods, devices, and kits for purifying and lysing biological particles",
        inventors: "Boutet SC, Salmanzadeh A, Gibbons M",
        patentNumber: "US-20220348901-A1",
        status: "Pending"
    },
    {
        year: "2022",
        title: "Methods for analyze detection and analysis",
        inventors: "McDermott G, Taylor S, Boutet SC, McDonnell WJ, Stubbington MJT",
        patentNumber: "US-20220236258-A1",
        status: "Pending"
    },
    {
        year: "2022",
        title: "Methods and compositions for labeling cells",
        inventors: "Boutet SC, Lucero MY, Mikkelsen TS, Pfeiffer K",
        patentNumber: "US-20220228220-A1",
        status: "Pending"
    },
    {
        year: "2022",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-20220106641-A1",
        status: "Pending"
    },
    {
        year: "2021",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Belgrader P, Bent Z, Bharadwaj R, Gopalan VKS, Harada J, Hindson C, Lenji MR, Luero MY, McDermott G, Meer E, Mikkelsen TS, O.Keeffe CJ, Pfeiffer K, Price AD, Ryvkin P, Saxonov S, Stuelpnagel JR, Terry JM, Wheeler TD, Wu I, Ziraldo SB, Boutet SC, Taylor S, Srinivas N",
        patentNumber: "US-20210130892-A1",
        status: "Pending"
    },
    {
        year: "2021",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Lucero MY, Mikkelsen TS, Pfeiffer K, Boutet SC",
        patentNumber: "US-11180805-B2",
        status: "Granted"
    },
    {
        year: "2021",
        title: "Increasing spatial array resolution",
        inventors: "Pfeiffer K, Bharadwaj R, Boutet SC, Frenz L",
        patentNumber: "US-20210332425",
        status: "Pending"
    },
    {
        year: "2021",
        title: "Methods and compositions for labeling cells",
        inventors: "Boutet SC, Lucero MY, Mikkelsen TS, Pfeiffer K",
        patentNumber: "US-20210140969-A1",
        status: "Pending"
    },
    {
        year: "2020",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Lucero MY, Mikkelsen TS, Pfeiffer K, Boutet SC",
        patentNumber: "US-10858702-B2",
        status: "Granted"
    },
    {
        year: "2020",
        title: "Methods and systems for processing polynucleotides",
        inventors: "Lucero MY, Mikkelsen TS, Pfeiffer K, Boutet SC",
        patentNumber: "US-10815525-B2",
        status: "Granted"
    },
    {
        year: "2020",
        title: "Methods and compositions for labeling cells",
        inventors: "Boutet SC, Lucero MY, Mikkelsen TS, Pfeiffer K",
        patentNumber: "US-20200291481-A1",
        status: "Pending"
    }
];
