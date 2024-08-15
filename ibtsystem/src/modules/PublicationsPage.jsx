import React, { useState } from "react";
import PublicationsList from "../components/PublicationsList";
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiUserLocationLine } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";
import "../assets/css/styles.css";

const PublicationsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const publications = [
    {
      id: 1,
      title:
        "Identification of a cryptic functional apolipophorin-III domain within the Prominin-1 gene of Litopenaeus vannamei.",
      authors:
        "Hoyos-Gonzalez N, Ochoa-Leyva A, Benitez-Cardoza CG, Brieba LG, Lukaszewicz G, Trasviña-Arenas CH, Sotelo-Mundo RR.",
      journal:
        "Comp Biochem Physiol B Biochem Mol Biol. 2024 Feb-Mar;270:110928. doi: 10.1016/j.cbpb.2023.110928. Epub 2023 Dec 2.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/38043730/",
    },
    {
      id: 2,
      title:
        "Complete genome sequence and characterization of a novel Enterococcus faecium with probiotic potential isolated from the gut of Litopenaeus vannamei.",
      authors:
        "Chino de la Cruz CM, Cornejo-Granados F, Gallardo-Becerra L, Rodríguez-Alegría ME, Ochoa-Leyva A, López Munguía A.",
      journal:
        "Microb Genom. 2023 Mar;9(3):mgen000938. doi: 10.1099/mgen.0.000938.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/36884014/",
    },
    {
      id: 3,
      title:
        "White spot syndrome virus impact on the expression of immune genes and gut microbiome of black tiger shrimp Penaeus monodon.",
      authors:
        "Jatuyosporn T, Laohawutthichai P, Romo JPO, Gallardo-Becerra L, Lopez FS, Tassanakajon A, Ochoa-Leyva A, Krusong K.",
      journal:
        "Sci Rep. 2023 Jan 18;13(1):996. doi: 10.1038/s41598-023-27906-8.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/36653369/",
    },
    {
      id: 4,
      title:
        "Agavin induces beneficial microbes in the shrimp microbiota under farming conditions.",
      authors:
        "Ochoa-Romo JP, Cornejo-Granados F, Lopez-Zavala AA, Viana MT, Sánchez F, Gallardo-Becerra L, Luque-Villegas M, Valdez-López Y, Sotelo-Mundo RR, Cota-Huízar A, López-Munguia A, Ochoa-Leyva A.",
      journal:
        "Sci Rep. 2022 Apr 16;12(1):6392. doi: 10.1038/s41598-022-10442-2.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/35430601/",
    },
    {
      id: 5,
      title:
        "A Novel Glutathione S-Transferase Gtt2 Class (VpGSTT2) Is Found in the Genome of the AHPND/EMS Vibrio parahaemolyticus Shrimp Pathogen.",
      authors:
        "Valenzuela-Chavira I, Corona-Martinez DO, Garcia-Orozco KD, Beltran-Torres M, Sanchez-Lopez F, Arvizu-Flores AA, Sugich-Miranda R, Lopez-Zavala AA, Robles-Zepeda RE, Islas-Osuna MA, Ochoa-Leyva A, Toney MD, Serrano-Posada H, Sotelo-Mundo RR.",
      journal:
        "Toxins (Basel). 2021 Sep 17;13(9):664. doi: 10.3390/toxins13090664.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/34564668/",
    },
    {
      id: 6,
      title:
        "PmAP2-β depletion enhanced activation of the Toll signaling pathway during yellow head virus infection in the black tiger shrimp Penaeus monodon.",
      authors:
        "Jatuyosporn T, Laohawutthichai P, Supungul P, Sotelo-Mundo RR, Ochoa-Leyva A, Tassanakajon A, Krusong K.",
      journal:
        "Sci Rep. 2021 May 18;11(1):10534. doi: 10.1038/s41598-021-89922-w.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/34006863/",
    },
    {
      id: 7,
      title:
        "OTUs and ASVs Produce Comparable Taxonomic and Diversity from Shrimp Microbiota 16S Profiles Using Tailored Abundance Filters.",
      authors:
        "García-López R, Cornejo-Granados F, Lopez-Zavala AA, Cota-Huízar A, Sotelo-Mundo RR, Gómez-Gil B, Ochoa-Leyva A.",
      journal:
        "Genes (Basel). 2021 Apr 13;12(4):564. doi: 10.3390/genes12040564.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/33924545/",
    },
    {
      id: 8,
      title:
        "Doing More with Less: A Comparison of 16S Hypervariable Regions in Search of Defining the Shrimp Microbiota.",
      authors:
        "García-López R, Cornejo-Granados F, Lopez-Zavala AA, Sánchez-López F, Cota-Huízar A, Sotelo-Mundo RR, Guerrero A, Mendoza-Vargas A, Gómez-Gil B, Ochoa-Leyva A.",
      journal:
        "Microorganisms. 2020 Jan 17;8(1):134. doi: 10.3390/microorganisms8010134.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/31963525/",
    },
    {
      id: 9,
      title:
        "Role of Clathrin Assembly Protein-2 Beta Subunit during White Spot Syndrome Virus Infection in Black Tiger Shrimp Penaeus monodon.",
      authors:
        "Jatuyosporn T, Laohawutthichai P, Supungul P, Sotelo-Mundo RR, Ochoa-Leyva A, Tassanakajon A, Krusong K.",
      journal:
        "Sci Rep. 2019 Sep 17;9(1):13489. doi: 10.1038/s41598-019-49852-0",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/31530841/",
    },
    {
      id: 10,
      title:
        "A meta-analysis reveals the environmental and host factors shaping the structure and function of the shrimp microbiota.",
      authors:
        "Cornejo-Granados F, Gallardo-Becerra L, Leonardo-Reza M, Ochoa-Romo JP, Ochoa-Leyva A.",
      journal:
        "PeerJ. 2018 Aug 10;6:e5382. doi: 10.7717/peerj.5382. eCollection 2018.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/30128187/",
    },
    {
      id: 11,
      title:
        "Microbiome of Pacific Whiteleg shrimp reveals differential bacterial community composition between Wild, Aquacultured and AHPND/EMS outbreak conditions.",
      authors:
        "Cornejo-Granados F, Lopez-Zavala AA, Gallardo-Becerra L, Mendoza-Vargas A, Sánchez F, Vichido R, Brieba LG, Viana MT, Sotelo-Mundo RR, Ochoa-Leyva A.",
      journal:
        "Sci Rep. 2017 Sep 18;7(1):11783. doi: 10.1038/s41598-017-11805-w.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/28924190/",
    },
    {
      id: 12,
      title:
        "Structural insights from a novel invertebrate triosephosphate isomerase from Litopenaeus vannamei.",
      authors:
        "Lopez-Zavala AA, Carrasco-Miranda JS, Ramirez-Aguirre CD, López-Hidalgo M, Benitez-Cardoza CG, Ochoa-Leyva A, Cardona-Felix CS, Diaz-Quezada C, Rudiño-Piñera E, Sotelo-Mundo RR, Brieba LG.",
      journal:
        "Biochim Biophys Acta. 2016 Dec;1864(12):1696-1706. doi: 10.1016/j.bbapap.2016.09.002. Epub 2016 Sep 7.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/27614148/",
    },
    {
      id: 13,
      title:
        "Novel transcriptome assembly and improved annotation of the whiteleg shrimp (Litopenaeus vannamei), a dominant crustacean in global seafood mariculture.",
      authors:
        "Ghaffari N, Sanchez-Flores A, Doan R, Garcia-Orozco KD, Chen PL, Ochoa-Leyva A, Lopez-Zavala AA, Carrasco JS, Hong C, Brieba LG, Rudiño-Piñera E, Blood PD, Sawyer JE, Johnson CD, Dindot SV, Sotelo-Mundo RR, Criscitiello MF.",
      journal: "Sci Rep. 2014 Nov 25;4:7081. doi: 10.1038/srep07081.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/25420880/",
    },
    {
      id: 14,
      title:
        "High-Quality Draft Genomes of Two Vibrio parahaemolyticus Strains Aid in Understanding Acute Hepatopancreatic Necrosis Disease of Cultured Shrimps in Mexico.",
      authors:
        "Gomez-Jimenez S, Noriega-Orozco L, Sotelo-Mundo RR, Cantu-Robles VA, Cobian-Guemes AG, Cota-Verdugo RG, Gamez-Alejo LA, Del Pozo-Yauner L, Guevara-Hernandez E, Garcia-Orozco KD, Lopez-Zavala AA, Ochoa-Leyva A.",
      journal:
        "Genome Announc. 2014 Aug 14;2(4):e00800-14. doi: 10.1128/genomeA.00800-14.",
      category: "microbiota",
      link: "https://pubmed.ncbi.nlm.nih.gov/25125645/",
    },
    {
      id: 15,
      title:
        "Perspectives in Searching Antimicrobial Peptides (AMPs) Produced by the Microbiota.",
      authors:
        "Gallardo-Becerra L, Cervantes-Echeverría M, Cornejo-Granados F, Vazquez-Morado LE, Ochoa-Leyva A.",
      journal:
        "Microb Ecol. 2023 Dec 1;87(1):8. doi: 10.1007/s00248-023-02313-8.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/38036921/",
    },
    {
      id: 16,
      title:
        "HLA-Haplotypes Influence Microbiota Structure in Northwestern Mexican Schoolchildren Predisposed for Celiac Disease or Type 1 Diabetes.",
      authors:
        "Aguayo-Patrón SV, Trujillo-Rivera OA, Cornejo-Granados F, Ochoa-Leyva A, Calderón de la Barca AM.",
      journal:
        "Microorganisms. 2023 May 27;11(6):1412. doi: 10.3390/microorganisms11061412.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/37374914/",
    },
    {
      id: 17,
      title:
        "Virulence Factors of the Gut Microbiome Are Associated with BMI and Metabolic Blood Parameters in Children with Obesity.",
      authors:
        "Murga-Garrido SM, Ulloa-Pérez EJ, Díaz-Benítez CE, Orbe-Orihuela YC, Cornejo-Granados F, Ochoa-Leyva A, Sanchez-Flores A, Cruz M, Castañeda-Márquez AC, Plett-Torres T, Burguete García AI, Lagunas-Martínez A.",
      journal:
        "Microbiol Spectr. 2023 Feb 14;11(2):e0338222. doi: 10.1128/spectrum.03382-22. ",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/36786619/",
    },
    {
      id: 18,
      title:
        "The Two-Faced Role of crAssphage Subfamilies in Obesity and Metabolic Syndrome: Between Good and Evil.",
      authors:
        "Cervantes-Echeverría M, Gallardo-Becerra L, Cornejo-Granados F, Ochoa-Leyva A.",
      journal:
        "Genes (Basel). 2023 Jan 4;14(1):139. doi: 10.3390/genes14010139.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/36672880/",
    },
    {
      id: 19,
      title:
        "Metal Ions and Chemical Modification Reagents Inhibit the Enzymatic Activity of Lecithin-Dependent Hemolysin from Vibrio parahaemolyticus.",
      authors:
        "Vazquez-Armenta FJ, Valdez-Olmos UF, Arvizu-Flores AA, Ayala-Zavala JF, Ochoa-Leyva A, Lopez-Zavala AA.",
      journal:
        "Toxins (Basel). 2022 Sep 1;14(9):609. doi: 10.3390/toxins14090609.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/36136547/",
    },
    {
      id: 20,
      title:
        "Transcriptome Analysis of Soursop (Annona muricata L.) Fruit under Postharvest Storage Identifies Genes Families Involved in Ripening.",
      authors:
        "Palomino-Hermosillo YA, Berumen-Varela G, Ochoa-Jiménez VA, Balois-Morales R, Jiménez-Zurita JO, Bautista-Rosales PU, Martínez-González ME, López-Guzmán GG, Cortés-Cruz MA, Guzmán LF, Cornejo-Granados F, Gallardo-Becerra L, Ochoa-Leyva A, Alia-Tejacal I.",
      journal:
        "Plants (Basel). 2022 Jul 7;11(14):1798. doi: 10.3390/plants11141798.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35890432/",
    },
    {
      id: 21,
      title:
        "Close Related Drug-Resistance Beijing Isolates of Mycobacterium tuberculosis Reveal a Different Transcriptomic Signature in a Murine Disease Progression Model.",
      authors:
        "Cerezo-Cortés MI, Rodríguez-Castillo JG, Mata-Espinosa DA, Bini EI, Barrios-Payan J, Zatarain-Barrón ZL, Anzola JM, Cornejo-Granados F, Ochoa-Leyva A, Del Portillo P, Murcia MI, Hernández-Pando R.",
      journal:
        "Int J Mol Sci. 2022 May 5;23(9):5157. doi: 10.3390/ijms23095157.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35563545/",
    },
    {
      id: 22,
      title:
        "Association of Gut Microbiota with Dietary-dependent Childhood Obesity.",
      authors:
        "Orbe-Orihuela YC, Godoy-Lozano EE, Lagunas-Martínez A, Castañeda-Márquez AC, Murga-Garrido S, Díaz-Benítez CE, Ochoa-Leyva A, Cornejo-Granados F, Cruz M, Estrada K, Bermúdez-Morales VH, Sanchez-Flores A, Burguete-García AI.",
      journal:
        "Arch Med Res. 2022 Jun;53(4):407-415. doi: 10.1016/j.arcmed.2022.03.007. Epub 2022 Apr 2.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35382951/",
    },
    {
      id: 23,
      title:
        "Alterations of the Gut Microbiome Associated to Methane Metabolism in Mexican Children with Obesity.",
      authors:
        "Murga-Garrido SM, Orbe-Orihuela YC, Díaz-Benítez CE, Castañeda-Márquez AC, Cornejo-Granados F, Ochoa-Leyva A, Sanchez-Flores A, Cruz M, Burguete-García AI, Lagunas-Martínez A.",
      journal:
        "Children (Basel). 2022 Jan 24;9(2):148. doi: 10.3390/children9020148.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35204867/",
    },
    {
      id: 24,
      title:
        "Protocol for the isolation, sequencing, and analysis of the gut phageome from human fecal samples.",
      authors:
        "Bikel S, Gallardo-Becerra L, Cornejo-Granados F, Ochoa-Leyva A.",
      journal:
        "STAR Protoc. 2022 Feb 9;3(1):101170. doi: 10.1016/j.xpro.2022.101170. eCollection 2022 Mar 18.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35199035/",
    },
    {
      id: 25,
      title:
        "Clinical and pathological characteristics associated with the presence of the IS6110 Mycobacterim tuberculosis transposon in neoplastic cells from non-small cell lung cancer patients.",
      authors:
        "Arrieta O, Molina-Romero C, Cornejo-Granados F, Marquina-Castillo B, Avilés-Salas A, López-Leal G, Cardona AF, Ortega-Gómez A, Orozco-Morales M, Ochoa-Leyva A, Hernandez-Pando R.",
      journal:
        "Sci Rep. 2022 Feb 9;12(1):2210. doi: 10.1038/s41598-022-05749-z.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35140255/",
    },
    {
      id: 26,
      title:
        "Genome analysis of Pseudomonas sp. 14A reveals metabolic capabilities to support epiphytic behavior.",
      authors:
        "Medina-Salazar SA, Cornejo-Granados F, Equihua-Medina E, Ochoa-Leyva A, Vallejo-Pérez MR, Vega-Manriquez DX, Jarquin-Gálvez R, Castro-Rivera R, Aguilar-Benítez G, Lara-Ávila JP.",
      journal:
        "World J Microbiol Biotechnol. 2022 Jan 31;38(3):49. doi: 10.1007/s11274-022-03238-z.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/35098385/",
    },
    {
      id: 27,
      title:
        "Targeted RNA-Seq Reveals the M. tuberculosis Transcriptome from an In Vivo Infection Model.",
      authors:
        "Cornejo-Granados F, López-Leal G, Mata-Espinosa DA, Barrios-Payán J, Marquina-Castillo B, Equihua-Medina E, Zatarain-Barrón ZL, Molina-Romero C, Hernández-Pando R, Ochoa-Leyva A.",
      journal:
        "Biology (Basel). 2021 Aug 31;10(9):848. doi: 10.3390/biology10090848.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/34571725/",
    },
    {
      id: 28,
      title:
        "Gut dsDNA virome shows diversity and richness alterations associated with childhood obesity and metabolic syndrome.",
      authors:
        "Bikel S, López-Leal G, Cornejo-Granados F, Gallardo-Becerra L, García-López R, Sánchez F, Equihua-Medina E, Ochoa-Romo JP, López-Contreras BE, Canizales-Quinteros S, Hernández-Reyna A, Mendoza-Vargas A, Ochoa-Leyva A.",
      journal:
        "iScience. 2021 Jul 24;24(8):102900. doi: 10.1016/j.isci.2021.102900. eCollection 2021 Aug 20.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/34409269/",
    },
    {
      id: 29,
      title:
        "Secretome characterization of clinical isolates from the Mycobacterium abscessus complex provides insight into antigenic differences.",
      authors:
        "Cornejo-Granados F, Kohl TA, Sotomayor FV, Andres S, Hernández-Pando R, Hurtado-Ramirez JM, Utpatel C, Niemann S, Maurer FP, Ochoa-Leyva A.",
      journal:
        "BMC Genomics. 2021 May 25;22(1):385. doi: 10.1186/s12864-021-07670-7.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/34034663/",
    },
    {
      id: 30,
      title:
        "Metatranscriptomic analysis to define the Secrebiome, and 16S rRNA profiling of the gut microbiome in obesity and metabolic syndrome of Mexican children.",
      authors:
        "Gallardo-Becerra L, Cornejo-Granados F, García-López R, Valdez-Lara A, Bikel S, Canizales-Quinteros S, López-Contreras BE, Mendoza-Vargas A, Nielsen H, Ochoa-Leyva A.",
      journal:
        "Microb Cell Fact. 2020 Mar 6;19(1):61. doi: 10.1186/s12934-020-01319-y.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/32143621/",
    },
    {
      id: 31,
      title:
        "Microbiome-MX 2018: microbiota and microbiome opportunities in Mexico, a megadiverse country.",
      authors:
        "Cornejo-Granados F, Calderón de la Barca AM, Torres N, Martínez-Romero E, Torres J, López-Vidal Y, Soberón X, Partida-Martínez LP, Pinto-Cardoso S, Alcaraz LD, Pardo-López L, Canizales-Quinteros S, Puente JL, Ochoa-Leyva A.",
      journal:
        "Res Microbiol. 2019 Jun-Aug;170(4-5):235-241. doi: 10.1016/j.resmic.2019.03.001. Epub 2019 Mar 25.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/30922683/",
    },
    {
      id: 32,
      title:
        "Whole-genome of Mexican-crAssphage isolated from the human gut microbiome.",
      authors:
        "Cervantes-Echeverría M, Equihua-Medina E, Cornejo-Granados F, Hernández-Reyna A, Sánchez F, López-Contreras BE, Canizales-Quinteros S, Ochoa-Leyva A.",
      journal:
        "BMC Res Notes. 2018 Dec 17;11(1):902. doi: 10.1186/s13104-018-4010-5.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/30558657/",
    },
    {
      id: 33,
      title:
        "Functional and taxonomic classification of a greenhouse water drain metagenome.",
      authors:
        "López-Leal G, Cornejo-Granados F, Hurtado-Ramírez JM, Mendoza-Vargas A, Ochoa-Leyva A.",
      journal:
        "Stand Genomic Sci. 2018 Oct 5;13:20. doi: 10.1186/s40793-018-0326-y. eCollection 2018.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/30323887/",
    },
    {
      id: 34,
      title:
        "Secret-AAR: a web server to assess the antigenic density of proteins and homology search against bacterial and parasite secretome proteins.",
      authors:
        "Cornejo-Granados F, Hurtado-Ramírez JM, Hernández-Pando R, Ochoa-Leyva A.",
      journal:
        "Genomics. 2019 Dec;111(6):1514-1516. doi: 10.1016/j.ygeno.2018.10.007. Epub 2018 Oct 11.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/30316740/",
    },
    {
      id: 35,
      title:
        "A novel approach for human whole transcriptome analysis based on absolute gene expression of microarray data.",
      authors:
        "Bikel S, Jacobo-Albavera L, Sánchez-Muñoz F, Cornejo-Granados F, Canizales-Quinteros S, Soberón X, Sotelo-Mundo RR, Del Río-Navarro BE, Mendoza-Vargas A, Sánchez F, Ochoa-Leyva A.",
      journal:
        "PeerJ. 2017 Dec 8;5:e4133. doi: 10.7717/peerj.4133. eCollection 2017.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/29230367/",
    },
    {
      id: 36,
      title:
        "Demographic history and biologically relevant genetic variation of Native Mexicans inferred from whole-genome sequencing.",
      authors:
        "Romero-Hidalgo S, Ochoa-Leyva A, Garcíarrubio A, Acuña-Alonzo V, Antúnez-Argüelles E, Balcazar-Quintero M, Barquera-Lozano R, Carnevale A, Cornejo-Granados F, Fernández-López JC, García-Herrera R, García-Ortíz H, Granados-Silvestre Á, Granados J, Guerrero-Romero F, Hernández-Lemus E, León-Mimila P, Macín-Pérez G, Martínez-Hernández A, Menjivar M, Morett E, Orozco L, Ortíz-López G, Pérez-Villatoro F, Rivera-Morales J, Riveros-McKay F, Villalobos-Comparán M, Villamil-Ramírez H, Villarreal-Molina T, Canizales-Quinteros S, Soberón X.",
      journal:
        "Nat Commun. 2017 Oct 18;8(1):1005. doi: 10.1038/s41467-017-01194-z.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/29044207/",
    },
    {
      id: 37,
      title:
        "Secretome Prediction of Two M. tuberculosis Clinical Isolates Reveals Their High Antigenic Density and Potential Drug Targets.",
      authors:
        "Cornejo-Granados F, Zatarain-Barrón ZL, Cantu-Robles VA, Mendoza-Vargas A, Molina-Romero C, Sánchez F, Del Pozo-Yauner L, Hernández-Pando R, Ochoa-Leyva A.",
      journal:
        "Front Microbiol. 2017 Feb 7;8:128. doi: 10.3389/fmicb.2017.00128. eCollection 2017.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/28223967/",
    },
    {
      id: 38,
      title:
        "Combining metagenomics, metatranscriptomics and viromics to explore novel microbial interactions: towards a systems-level understanding of human microbiome.",
      authors:
        "Bikel S, Valdez-Lara A, Cornejo-Granados F, Rico K, Canizales-Quinteros S, Soberón X, Del Pozo-Yauner L, Ochoa-Leyva A.",
      journal:
        "Comput Struct Biotechnol J. 2015 Jun 9;13:390-401. doi: 10.1016/j.csbj.2015.06.001. eCollection 2015.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/26137199/",
    },
    {
      id: 39,
      title:
        "Genome analysis of Excretory/Secretory proteins in Taenia solium reveals their Abundance of Antigenic Regions (AAR).",
      authors:
        "Gomez S, Adalid-Peralta L, Palafox-Fonseca H, Cantu-Robles VA, Soberón X, Sciutto E, Fragoso G, Bobes RJ, Laclette JP, Yauner Ldel P, Ochoa-Leyva A.",
      journal: "Sci Rep. 2015 May 19;5:9683. doi: 10.1038/srep09683.",
      category: "otras",
      link: "https://pubmed.ncbi.nlm.nih.gov/25989346/",
    },
    {
      id: 40,
      title:
        "La microbiota humana, un mundo microscópico apasionante de explorar",
      authors:
        "Bikel, Shirley; Ochoa-Leyva, Adrián, Biotecnología en Movimiento Número: 13-7",
      category: "SciComm",
      link: "https://biotecmov.ibt.unam.mx/services/pdfDownloader.php?id=MTMqKl8qKjc=",
    },
    {
      id: 41,
      title:
        "El uso de la ingeniería genética en el diseño y mejoramiento de la microbiota intestinal",
      authors:
        "Fernanda Cornejo Granados y Adrián Ochoa Leyva, Biotecnología en Movimiento Número: 35-4",
      category: "SciComm",
      link: "https://biotecmov.ibt.unam.mx/numeros/35/4.html",
    },
  ];
  return (
    <>
      <header>
        <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-navbar !bg-opacity-100">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <a
                href="https://www.ibt.unam.mx/"
                className="flex items-center space-x-3 hidden md:flex"
              >
                <img
                  src="/src/assets/img/logo-unam-blanco.png"
                  alt="Universidad Nacional Autónoma de México"
                  className="h-11 w-12"
                />
                <img
                  src="https://www.ibt.unam.mx/media/logo/logo-biotecnologia.png?time=0.32139200%201718576557"
                  className="h-10 w-21 mt-3"
                  alt="IBT Logo"
                />
              </a>
              <a
                href="/"
                className="self-center !title-size text-2xl font-bold whitespace-nowrap dark:text-gray-300 text-white project-title"
              >
                The Shrimp Microbiome Project
              </a>
              <a
                href="/"
                className="self-center !title-size text-2xl font-bold whitespace-nowrap dark:text-gray-300 text-white collapsed-title"
              >
                Shrimp Microbiome
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`flex items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isMenuOpen ? "block" : "hidden"
              } md:flex-row`}
            >
              <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:space-y-0 md:space-x-4 md:border-0 md:bg-[#0066CC] dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li className="flex items-center space-x-2 rtl:space-x-reverse justify-end">
                  <FaHome
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-[#0066CC] rounded md:text-white md:p-0 md:dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <IoIosSearch
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/searchpage"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Microbiota Search Page
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RiGitRepositoryLine
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/publications"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Publications
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <PiCertificateDuotone
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/courses"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RiUserLocationLine
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/contact"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 content-with-navbar bg-inherit">
        <h1 className="font-bold text-center">Publications</h1>
        <PublicationsList publications={publications} />
      </main>
    </>
  );
};

export default PublicationsPage;
