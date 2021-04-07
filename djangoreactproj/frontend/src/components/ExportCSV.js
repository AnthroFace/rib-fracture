
import React , {Component} from 'react'; 
import {CSVLink} from 'react-csv';

import Box from "@material-ui/core/Box";
import { Table } from "reactstrap";
import { Col, Container, Row } from "reactstrap";
import "./../text.css";

import axios from 'axios'
import { API_URL } from "../constants";

const tempData =[
  ['Case ID',  'Age', 'Sex', 'Weight',  'Height (in)', 'Ancestry',  'MOD', 'COD', 'COD Type',  'XRAY',  'CPR',
   'Belted (if ap)',  'Obese', 'Cardiovascular Issues', 'Pathologies', 'Cigarette/Tobacco Use', 'Marijuana Use',
   'Alcohol Use', 'Prescription Medications',  'Illicit Drug Use',  'Health Notes',  'Sternum',
   'CPR', 'l.p.rib.1', 'Completeness',  'Type',  'CPR', 'l.pl.rib.1',  'Completeness',  'Type',  'CPR', 'l.al.rib.1',  
   'Completeness',  'Type',  'CPR', 'l.p.rib.2', 'Completeness',  'Type',  'CPR', 'l.pl.rib.2',  'Completeness',  'Type',
   'CPR', 'l.al.rib.2',  'Completeness',  'Type',  'CPR', 'l.a.rib.2', 'Completeness',  'Type',  'CPR', 'l.p.rib.3', 
   'Completeness',  'Type',  'CPR', 'l.pl.rib.3',  'Completeness',  'Type',  'CPR', 'l.al.rib.3',  'Completeness',  
   'Type',  'CPR', 'l.a.rib.3', 'Completeness',  'Type',  'CPR', 'l.p.rib.4', 'Completeness',  'Type',  'CPR', 
   'l.pl.rib.4',  'Completeness',  'Type',  'CPR', 'l.al.rib.4',  'Completeness',  'Type',  'CPR', 'l.a.rib.4', 'Completeness',
   'Type',  'CPR', 'l.p.rib.5', 'Completeness',  'Type',  'CPR', 'l.pl.rib.5',  'Completeness',  'Type',  'CPR', 'l.al.rib.5',
   'Completeness',  'Type',  'CPR', 'l.a.rib.5', 'Completeness',  'Type',  'CPR', 'l.p.rib.6', 'Completeness',  'Type', 
   'CPR', 'l.pl.rib.6',  'Completeness',  'Type',  'CPR', 'l.al.rib.6',  'Completeness',  'Type',  'CPR', 'l.a.rib.6',
   'Completeness',  'Type',  'CPR', 'l.p.rib.7', 'Completeness',  'Type',  'CPR', 'l.pl.rib.7',  'Completeness',  'Type',
   'CPR', 'l.al.rib.7',  'Completeness',  'Type',  'CPR', 'l.a.rib.7', 'Completeness',  'Type',  'CPR', 'l.p.rib.8',
   'Completeness',  'Type',  'CPR', 'l.pl.rib.8',  'Completeness',  'Type',  'CPR', 'l.al.rib.8',  'Completeness',  'Type',
   'CPR', 'l.a.rib.8', 'Completeness',  'Type',  'CPR', 'l.p.rib.9', 'Completeness',  'Type',  'CPR', 'l.pl.rib.9',  
   'Completeness',  'Type',  'CPR', 'l.al.rib.9',  'Completeness',  'Type',  'CPR', 'l.a.rib.9', 'Completeness',  'Type',
   'CPR', 'l.p.rib.10',  'Completeness',  'Type',  'CPR', 'l.pl.rib.10', 'Completeness',  'Type',  'CPR', 'l.al.rib.10', 
   'Completeness',  'Type',  'CPR', 'l.a.rib.10',  'Completeness',  'Type',  'CPR', 'l.p.rib.11',  'Completeness',
   'Type',  'CPR', 'l.pl.rib.11', 'Completeness',  'Type',  'CPR', 'l.al.rib.11', 'Completeness',  'Type',  'CPR', 
   'l.p.rib.12',  'Completeness',  'Type',  'CPR', 'l.pl.rib.12', 'Completeness',  'Type',  'CPR', 'l.al.rib.12',
   'Completeness',  'Type',  'CPR', 'r.p.rib.1', 'Completeness',  'Type',  'CPR', 'r.pl.rib.1',  'Completeness',  'Type',
   'CPR', 'r.al.rib.1',  'Completeness',  'Type',  'CPR', 'r.p.rib.2', 'Completeness',  'Type',  'CPR', 'r.pl.rib.2',
   'Completeness',  'Type',  'CPR', 'r.al.rib.2',  'Completeness',  'Type',  'CPR', 'r.a.rib.2', 'Completeness',  'Type',
   'CPR', 'r.p.rib.3', 'Completeness',  'Type',  'CPR', 'r.pl.rib.3',  'Completeness',  'Type',  'CPR', 'r.al.rib.3',
   'Completeness',  'Type',  'CPR', 'r.a.rib.3', 'Completeness',  'Type',  'CPR', 'r.p.rib.4', 'Completeness',  'Type',
   'CPR', 'r.pl.rib.4',  'Completeness',  'Type',  'CPR', 'r.al.rib.4',  'Completeness',  'Type',  'CPR', 'r.a.rib.4',
   'Completeness',  'Type',  'CPR', 'r.p.rib.5', 'Completeness',  'Type',  'CPR', 'r.pl.rib.5',  'Completeness',  'Type',  
   'CPR', 'r.al.rib.5',  'Completeness',  'Type',  'CPR', 'r.a.rib.5', 'Completeness',  'Type',  'CPR', 'r.p.rib.6',
   'Completeness',  'Type',  'CPR', 'r.pl.rib.6',  'Completeness',  'Type',  'CPR', 'r.al.rib.6',  'Completeness',  'Type',
   'CPR', 'r.a.rib.6', 'Completeness',  'Type',  'CPR', 'r.p.rib.7', 'Completeness',  'Type',  'CPR', 'r.pl.rib.7',
   'Completeness',  'Type',  'CPR', 'r.al.rib.7',  'Completeness',  'Type',  'CPR', 'r.a.rib.7', 'Completeness',  'Type',
   'CPR', 'r.p.rib.8', 'Completeness',  'Type',  'CPR', 'r.pl.rib.8',  'Completeness',  'Type',  'CPR', 'r.al.rib.8',
   'Completeness',  'Type',  'CPR', 'r.a.rib.8', 'Completeness',  'Type',  'CPR', 'r.p.rib.9', 'Completeness',  'Type',
   'CPR', 'r.pl.rib.9',  'Completeness',  'Type',  'CPR', 'r.al.rib.9',  'Completeness',  'Type',  'CPR', 'r.a.rib.9',
   'Completeness',  'Type',  'CPR', 'r.p.rib.10',  'Completeness',  'Type',  'CPR', 'r.pl.rib.10', 'Completeness',
   'Type',  'CPR', 'r.al.rib.10', 'Completeness',  'Type',  'CPR', 'r.a.rib.10',  'Completeness',  'Type',  'CPR',
   'r.p.rib.11',  'Completeness',  'Type',  'CPR', 'r.pl.rib.11', 'Completeness',  'Type',  'CPR', 'r.al.rib.11',
   'Completeness',  'Type',  'CPR', 'r.p.rib.12',  'Completeness',  'Type',  'CPR', 'r.pl.rib.12', 'Completeness',
   'Type',  'CPR', 'r.al.rib.12', 'Completeness',  'Type',  'CPR',  'Additional Notes',
]
];


const ExportHeaders = [
{ label: "Case ID", key: "case_id"},
{ label: "Age", key: "age"},
{ label: "Sex", key: "sex"},
{ label: "Weight", key: "weight"},
{ label: "Height (in)", key: "height"},
{ label: "Ancestry", key: "ancestry"},
{ label: "MOD", key: "mod"},
{ label: "COD", key: "cod"},
{ label: "COD Type", key: "cod_type"},
{ label: "XRAY", key: "xray"},
{ label: "CPR", key: "cpr"},
{ label: "Belted (if ap)", key: "belted"},
{ label: "Obese", key: "obese"},
{ label: "Cardiovascular Issues", key: "cardio"},
{ label: "Pathologies", key: "patho"},
{ label: "Cigarette/Tobacco Use", key: "tobacco"},
{ label: "Marijuana Use", key: "marijuana"},
{ label: "Alcohol Use", key: "alcohol"},
{ label: "Prescription Medications", key: "prescription"},
{ label: "Illicit Drug Use", key: "drug_use"},
{ label: "Health Notes", key: "health_notes"},
{ label: "Sternum", key: "sternum"},
{ label: "CPR", key: "cpr_sternum"},
{ label: "l.p.rib.1", key: "lprib1"},
{ label: "Completeness", key: "com_lprib1"},
{ label: "Type", key: "type_lprib1"},
{ label: "CPR", key: "cpr_lprib1"},
{ label: "l.pl.rib.1", key: "lplrib1"},
{ label: "Completeness", key: "com_lplrib1"},
{ label: "Type", key: "type_lplrib1"},
{ label: "CPR", key: "cpr_lplrib1"},
{ label: "l.al.rib.1", key: "lalrib1"},
{ label: "Completeness", key: "com_lalrib1"},
{ label: "Type", key: "type_lalrib1"},
{ label: "CPR", key: "cpr_lalrib1"},
{ label: "l.p.rib.2", key: "lprib2"},
{ label: "Completeness", key: "com_lprib2"},
{ label: "Type", key: "type_lprib2"},
{ label: "CPR", key: "cpr_lprib2"},
{ label: "l.pl.rib.2", key: "lplrib2"},
{ label: "Completeness", key: "com_lplrib2"},
{ label: "Type", key: "type_lplrib2"},
{ label: "CPR", key: "cpr_lplrib2"},
{ label: "l.al.rib.2", key: "lalrib2"},
{ label: "Completeness", key: "com_lalrib2"},
{ label: "Type", key: "type_lalrib2"},
{ label: "CPR", key: "cpr_lalrib2"},
{ label: "l.a.rib.2", key: "larib2"},
{ label: "Completeness", key: "com_larib2"},
{ label: "Type", key: "type_larib2"},
{ label: "CPR", key: "cpr_larib2"},
{ label: "l.p.rib.3", key: "lprib3"},
{ label: "Completeness", key: "com_lprib3"},
{ label: "Type", key: "type_lprib3"},
{ label: "CPR", key: "cpr_lprib3"},
{ label: "l.pl.rib.3", key: "lplrib3"},
{ label: "Completeness", key: "com_lplrib3"},
{ label: "Type", key: "type_lplrib3"},
{ label: "CPR", key: "cpr_lplrib3"},
{ label: "l.al.rib.3", key: "lalrib2"},
{ label: "Completeness", key: "com_lalrib3"},
{ label: "Type", key: "type_lalrib3"},
{ label: "CPR", key: "cpr_lalrib3"},
{ label: "l.a.rib.3", key: "larib3"},
{ label: "Completeness", key: "com_larib3"},
{ label: "Type", key: "type_larib3"},
{ label: "CPR", key: "cpr_larib3"},
{ label: "l.p.rib.4", key: "lprib4"},
{ label: "Completeness", key: "com_lprib4"},
{ label: "Type", key: "type_lprib4"},
{ label: "CPR", key: "cpr_lprib4"},
{ label: "l.pl.rib.4", key: "lplrib4"},
{ label: "Completeness", key: "com_lplrib4"},
{ label: "Type", key: "type_lplrib4"},
{ label: "CPR", key: "cpr_lplrib4"},
{ label: "l.al.rib.4", key: "lalrib4"},
{ label: "Completeness", key: "com_lalrib4"},
{ label: "Type", key: "type_lalrib4"},
{ label: "CPR", key: "cpr_lalrib4"},
{ label: "l.a.rib.4", key: "larib4"},
{ label: "Completeness", key: "com_larib4"},
{ label: "Type", key: "type_larib4"},
{ label: "CPR", key: "cpr_larib4"},
{ label: "l.p.rib.5", key: "lprib5"},
{ label: "Completeness", key: "com_lprib5"},
{ label: "Type", key: "type_lprib5"},
{ label: "CPR", key: "cpr_lprib5"},
{ label: "l.pl.rib.5", key: "lplrib5"},
{ label: "Completeness", key: "com_lplrib5"},
{ label: "Type", key: "type_lplrib5"},
{ label: "CPR", key: "cpr_lplrib5"},
{ label: "l.al.rib.5", key: "lalrib5"},
{ label: "Completeness", key: "com_lalrib5"},
{ label: "Type", key: "type_lalrib5"},
{ label: "CPR", key: "cpr_lalrib5"},
{ label: "l.a.rib.5", key: "larib5"},
{ label: "Completeness", key: "com_larib5"},
{ label: "Type", key: "type_larib5"},
{ label: "CPR", key: "cpr_larib5"},
{ label: "l.p.rib.6", key: "lprib6"},
{ label: "Completeness", key: "com_lprib6"},
{ label: "Type", key: "type_lprib6"},
{ label: "CPR", key: "cpr_lprib6"},
{ label: "l.pl.rib.6", key: "lplrib6"},
{ label: "Completeness", key: "com_lplrib6"},
{ label: "Type", key: "type_lplrib6"},
{ label: "CPR", key: "cpr_lplrib6"},
{ label: "l.al.rib.6", key: "lalrib6"},
{ label: "Completeness", key: "com_lalrib6"},
{ label: "Type", key: "type_lalrib6"},
{ label: "CPR", key: "cpr_lalrib6"},
{ label: "l.a.rib.6", key: "larib6"},
{ label: "Completeness", key: "com_larib6"},
{ label: "Type", key: "type_larib6"},
{ label: "CPR", key: "cpr_larib6"},
{ label: "l.p.rib.7", key: "lprib7"},
{ label: "Completeness", key: "com_lprib7"},
{ label: "Type", key: "type_lprib7"},
{ label: "CPR", key: "cpr_lprib7"},
{ label: "l.pl.rib.7", key: "lplrib7"},
{ label: "Completeness", key: "com_lplrib7"},
{ label: "Type", key: "type_lplrib7"},
{ label: "CPR", key: "cpr_lplrib7"},
{ label: "l.al.rib.7", key: "lalrib7"},
{ label: "Completeness", key: "com_lalrib7"},
{ label: "Type", key: "type_lalrib7"},
{ label: "CPR", key: "cpr_lalrib7"},
{ label: "l.a.rib.7", key: "larib7"},
{ label: "Completeness", key: "com_larib7"},
{ label: "Type", key: "type_larib7"},
{ label: "CPR", key: "cpr_larib7"},
{ label: "l.p.rib.8", key: "lprib8"},
{ label: "Completeness", key: "com_lprib8"},
{ label: "Type", key: "type_lprib8"},
{ label: "CPR", key: "cpr_lprib8"},
{ label: "l.pl.rib.8", key: "lplrib8"},
{ label: "Completeness", key: "com_lplrib8"},
{ label: "Type", key: "type_lplrib8"},
{ label: "CPR", key: "cpr_lplrib8"},
{ label: "l.al.rib.8", key: "lalrib8"},
{ label: "Completeness", key: "com_lalrib8"},
{ label: "Type", key: "type_lalrib8"},
{ label: "CPR", key: "cpr_lalrib8"},
{ label: "l.a.rib.8", key: "larib8"},
{ label: "Completeness", key: "com_larib8"},
{ label: "Type", key: "type_larib8"},
{ label: "CPR", key: "cpr_larib8"},
{ label: "l.p.rib.9", key: "lprib9"},
{ label: "Completeness", key: "com_lprib9"},
{ label: "Type", key: "type_lprib9"},
{ label: "CPR", key: "cpr_lprib9"},
{ label: "l.pl.rib.9", key: "lplrib9"},
{ label: "Completeness", key: "com_lplrib9"},
{ label: "Type", key: "type_lplrib9"},
{ label: "CPR", key: "cpr_lplrib9"},
{ label: "l.al.rib.9", key: "lalrib9"},
{ label: "Completeness", key: "com_lalrib9"},
{ label: "Type", key: "type_lalrib9"},
{ label: "CPR", key: "cpr_lalrib9"},
{ label: "l.a.rib.9", key: "larib9"},
{ label: "Completeness", key: "com_larib9"},
{ label: "Type", key: "type_larib9"},
{ label: "CPR", key: "cpr_larib9"},
{ label: "l.p.rib.10", key: "lprib10"},
{ label: "Completeness", key: "com_lprib10"},
{ label: "Type", key: "type_lprib10"},
{ label: "CPR", key: "cpr_lprib10"},
{ label: "l.pl.rib.10", key: "lplrib10"},
{ label: "Completeness", key: "com_lplrib10"},
{ label: "Type", key: "type_lplrib10"},
{ label: "CPR", key: "cpr_lplrib10"},
{ label: "l.al.rib.10", key: "lalrib10"},
{ label: "Completeness", key: "com_lalrib10"},
{ label: "Type", key: "type_lalrib10"},
{ label: "CPR", key: "cpr_lalrib10"},
{ label: "l.a.rib.10", key: "larib10"},
{ label: "Completeness", key: "com_larib10"},
{ label: "Type", key: "type_larib10"},
{ label: "CPR", key: "cpr_larib10"},
{ label: "l.p.rib.11", key: "lprib11"},
{ label: "Completeness", key: "com_lprib11"},
{ label: "Type", key: "type_lprib11"},
{ label: "CPR", key: "cpr_lprib11"},
{ label: "l.pl.rib.11", key: "lplrib11"},
{ label: "Completeness", key: "com_lplrib11"},
{ label: "Type", key: "type_lplrib11"},
{ label: "CPR", key: "cpr_lplrib11"},
{ label: "l.al.rib.11", key: "lalrib11"},
{ label: "Completeness", key: "com_lalrib11"},
{ label: "Type", key: "type_lalrib11"},
{ label: "CPR", key: "cpr_lalrib11"},
{ label: "l.p.rib.12", key: "lprib12"},
{ label: "Completeness", key: "com_lprib12"},
{ label: "Type", key: "type_lprib12"},
{ label: "CPR", key: "cpr_lprib11"},
{ label: "l.pl.rib.12", key: "lplrib12"},
{ label: "Completeness", key: "com_lplrib12"},
{ label: "Type", key: "type_lplrib12"},
{ label: "CPR", key: "cpr_lplrib12"},
{ label: "l.al.rib.12", key: "lalrib12"},
{ label: "Completeness", key: "com_lalrib12"},
{ label: "Type", key: "type_lalrib12"},
{ label: "CPR", key: "cpr_lalrib12"},
{ label: "r.p.rib.1", key: "rprib1"},
{ label: "Completeness", key: "com_rprib1"},
{ label: "Type", key: "type_rprib1"},
{ label: "CPR", key: "cpr_rprib1"},
{ label: "r.pl.rib.1", key: "rplrib1"},
{ label: "Completeness", key: "com_rplrib1"},
{ label: "Type", key: "type_rplrib1"},
{ label: "CPR", key: "cpr_rplrib1"},
{ label: "r.al.rib.1", key: "ralrib1"},
{ label: "Completeness", key: "com_ralrib1"},
{ label: "Type", key: "type_ralrib1"},
{ label: "CPR", key: "cpr_ralrib1"},
{ label: "r.p.rib.2", key: "rprib2"},
{ label: "Completeness", key: "com_rprib2"},
{ label: "Type", key: "type_rprib2"},
{ label: "CPR", key: "cpr_rprib2"},
{ label: "r.pl.rib.2", key: "rplrib2"},
{ label: "Completeness", key: "com_rplrib2"},
{ label: "Type", key: "type_rplrib2"},
{ label: "CPR", key: "cpr_rplrib2"},
{ label: "r.al.rib.2", key: "ralrib2"},
{ label: "Completeness", key: "com_ralrib2"},
{ label: "Type", key: "type_ralrib2"},
{ label: "CPR", key: "cpr_ralrib2"},
{ label: "r.a.rib.2", key: "rarib2"},
{ label: "Completeness", key: "com_rarib2"},
{ label: "Type", key: "type_rarib2"},
{ label: "CPR", key: "cpr_rarib2"},
{ label: "r.p.rib.3", key: "rprib3"},
{ label: "Completeness", key: "com_rprib3"},
{ label: "Type", key: "type_rprib3"},
{ label: "CPR", key: "cpr_rprib3"},
{ label: "r.pl.rib.3", key: "rplrib3"},
{ label: "Completeness", key: "com_rplrib3"},
{ label: "Type", key: "type_rplrib3"},
{ label: "CPR", key: "cpr_rplrib3"},
{ label: "r.al.rib.3", key: "ralrib2"},
{ label: "Completeness", key: "com_ralrib3"},
{ label: "Type", key: "type_ralrib3"},
{ label: "CPR", key: "cpr_ralrib3"},
{ label: "r.a.rib.3", key: "rarib3"},
{ label: "Completeness", key: "com_rarib3"},
{ label: "Type", key: "type_rarib3"},
{ label: "CPR", key: "cpr_rarib3"},
{ label: "r.p.rib.4", key: "rprib4"},
{ label: "Completeness", key: "com_rprib4"},
{ label: "Type", key: "type_rprib4"},
{ label: "CPR", key: "cpr_rprib4"},
{ label: "r.pl.rib.4", key: "rplrib4"},
{ label: "Completeness", key: "com_rplrib4"},
{ label: "Type", key: "type_rplrib4"},
{ label: "CPR", key: "cpr_rplrib4"},
{ label: "r.al.rib.4", key: "ralrib4"},
{ label: "Completeness", key: "com_ralrib4"},
{ label: "Type", key: "type_ralrib4"},
{ label: "CPR", key: "cpr_ralrib4"},
{ label: "r.a.rib.4", key: "rarib4"},
{ label: "Completeness", key: "com_rarib4"},
{ label: "Type", key: "type_rarib4"},
{ label: "CPR", key: "cpr_rarib4"},
{ label: "r.p.rib.5", key: "rprib5"},
{ label: "Completeness", key: "com_rprib5"},
{ label: "Type", key: "type_rprib5"},
{ label: "CPR", key: "cpr_rprib5"},
{ label: "r.pl.rib.5", key: "rplrib5"},
{ label: "Completeness", key: "com_rplrib5"},
{ label: "Type", key: "type_rplrib5"},
{ label: "CPR", key: "cpr_rplrib5"},
{ label: "r.al.rib.5", key: "ralrib5"},
{ label: "Completeness", key: "com_ralrib5"},
{ label: "Type", key: "type_ralrib5"},
{ label: "CPR", key: "cpr_ralrib5"},
{ label: "r.a.rib.5", key: "rarib5"},
{ label: "Completeness", key: "com_rarib5"},
{ label: "Type", key: "type_rarib5"},
{ label: "CPR", key: "cpr_rarib5"},
{ label: "r.p.rib.6", key: "rprib6"},
{ label: "Completeness", key: "com_rprib6"},
{ label: "Type", key: "type_rprib6"},
{ label: "CPR", key: "cpr_rprib6"},
{ label: "r.pl.rib.6", key: "rplrib6"},
{ label: "Completeness", key: "com_rplrib6"},
{ label: "Type", key: "type_rplrib6"},
{ label: "CPR", key: "cpr_rplrib6"},
{ label: "r.al.rib.6", key: "ralrib6"},
{ label: "Completeness", key: "com_ralrib6"},
{ label: "Type", key: "type_ralrib6"},
{ label: "CPR", key: "cpr_ralrib6"},
{ label: "r.a.rib.6", key: "rarib6"},
{ label: "Completeness", key: "com_rarib6"},
{ label: "Type", key: "type_rarib6"},
{ label: "CPR", key: "cpr_rarib6"},
{ label: "r.p.rib.7", key: "rprib7"},
{ label: "Completeness", key: "com_rlprib7"},
{ label: "Type", key: "type_rprib7"},
{ label: "CPR", key: "cpr_rprib7"},
{ label: "r.pl.rib.7", key: "rplrib7"},
{ label: "Completeness", key: "com_rplrib7"},
{ label: "Type", key: "type_rplrib7"},
{ label: "CPR", key: "cpr_rplrib7"},
{ label: "r.al.rib.7", key: "ralrib7"},
{ label: "Completeness", key: "com_ralrib7"},
{ label: "Type", key: "type_ralrib7"},
{ label: "CPR", key: "cpr_ralrib7"},
{ label: "r.a.rib.7", key: "rarib7"},
{ label: "Completeness", key: "com_rarib7"},
{ label: "Type", key: "type_rarib7"},
{ label: "CPR", key: "cpr_rarib7"},
{ label: "r.p.rib.8", key: "rprib8"},
{ label: "Completeness", key: "com_rprib8"},
{ label: "Type", key: "type_rprib8"},
{ label: "CPR", key: "cpr_rprib8"},
{ label: "r.pl.rib.8", key: "rplrib8"},
{ label: "Completeness", key: "com_rplrib8"},
{ label: "Type", key: "type_rplrib8"},
{ label: "CPR", key: "cpr_rplrib8"},
{ label: "r.al.rib.8", key: "ralrib8"},
{ label: "Completeness", key: "com_ralrib8"},
{ label: "Type", key: "type_ralrib8"},
{ label: "CPR", key: "cpr_ralrib8"},
{ label: "r.a.rib.8", key: "rarib8"},
{ label: "Completeness", key: "com_rarib8"},
{ label: "Type", key: "type_rarib8"},
{ label: "CPR", key: "cpr_rarib8"},
{ label: "r.p.rib.9", key: "rprib9"},
{ label: "Completeness", key: "com_rprib9"},
{ label: "Type", key: "type_rprib9"},
{ label: "CPR", key: "cpr_rprib9"},
{ label: "r.pl.rib.9", key: "rplrib9"},
{ label: "Completeness", key: "com_rplrib9"},
{ label: "Type", key: "type_rplrib9"},
{ label: "CPR", key: "cpr_rplrib9"},
{ label: "r.al.rib.9", key: "ralrib9"},
{ label: "Completeness", key: "com_ralrib9"},
{ label: "Type", key: "type_ralrib9"},
{ label: "CPR", key: "cpr_ralrib9"},
{ label: "r.a.rib.9", key: "rarib9"},
{ label: "Completeness", key: "com_rarib9"},
{ label: "Type", key: "type_rarib9"},
{ label: "CPR", key: "cpr_rarib9"},
{ label: "r.p.rib.10", key: "rprib10"},
{ label: "Completeness", key: "com_rprib10"},
{ label: "Type", key: "type_rprib10"},
{ label: "CPR", key: "cpr_rprib10"},
{ label: "r.pl.rib.10", key: "rplrib10"},
{ label: "Completeness", key: "com_rplrib10"},
{ label: "Type", key: "type_rplrib10"},
{ label: "CPR", key: "cpr_rplrib10"},
{ label: "r.al.rib.10", key: "ralrib10"},
{ label: "Completeness", key: "com_ralrib10"},
{ label: "Type", key: "type_ralrib10"},
{ label: "CPR", key: "cpr_ralrib10"},
{ label: "r.a.rib.10", key: "rarib10"},
{ label: "Completeness", key: "com_rarib10"},
{ label: "Type", key: "type_rarib10"},
{ label: "CPR", key: "cpr_rarib10"},
{ label: "r.p.rib.11", key: "rprib11"},
{ label: "Completeness", key: "com_rprib11"},
{ label: "Type", key: "type_rprib11"},
{ label: "CPR", key: "cpr_rprib11"},
{ label: "r.pl.rib.11", key: "rplrib11"},
{ label: "Completeness", key: "com_rplrib11"},
{ label: "Type", key: "type_rplrib11"},
{ label: "CPR", key: "cpr_rplrib11"},
{ label: "r.al.rib.11", key: "ralrib11"},
{ label: "Completeness", key: "com_ralrib11"},
{ label: "Type", key: "type_ralrib11"},
{ label: "CPR", key: "cpr_ralrib11"},
{ label: "r.p.rib.12", key: "rprib12"},
{ label: "Completeness", key: "com_rprib12"},
{ label: "Type", key: "type_rprib12"},
{ label: "CPR", key: "cpr_rprib11"},
{ label: "r.pl.rib.12", key: "rplrib12"},
{ label: "Completeness", key: "com_rplrib12"},
{ label: "Type", key: "type_rplrib12"},
{ label: "CPR", key: "cpr_rplrib12"},
{ label: "r.al.rib.12", key: "ralrib12"},
{ label: "Completeness", key: "com_ralrib12"},
{ label: "Type", key: "type_ralrib12"},
{ label: "CPR", key: "cpr_ralrib12"},
{ label: "Additional Notes", key: "notes"},
];
/*
const patientData =[
  ['Case ID', 'Age', 'Sex', 'Weight', 'Ancestry', 
  'MOD', 'COD', 'COD Type', 'X-Ray', 'Belted', 'Obese', 
  'Cardiovascular Issues', 'Pathology', 'Tobacco', 'Marijuana', 
  'Alcohol', 'Prescription', 'Drug Use', 'Health Notes'], 
  ['this.state.patients']
]; 
*/

const link1Style  = {
  backgroundColor: '#fff',
  fontSize: 20,
  fontWeight: 500,
  height: 52,
  padding: '10px 95px',
  borderRadius: 10,
  color: '#96382f'
};

const link2Style  = {
  backgroundColor: '#fff',
  fontSize: 20,
  fontWeight: 500,
  height: 52,
  padding: '10px 55px',
  borderRadius: 10,
  color: '#96382f'
};

class ExportCSV extends Component {
  state = {
      patients: [], 
  }; 

componentDidMount() {
    this.resetState();
  }

getPatients = () => {
    axios.get(API_URL).then((res) => this.setState({ patients: res.data.patients }));
  };

resetState = () => {
    this.getPatients();
  }; 


  render() {
    return (
      
      <div className="ExportCSV" >
        <div class = "csvtitle2">
        <h4>Export CSV File</h4>
        </div>
      <Box padding = "0px 50px 35px 0px" >
        <CSVLink class = "ugh" data={this.state.patients} style={link1Style} filename="ExportData.csv">Export Data</CSVLink>
      </Box>
      <Box padding = "0px 50px 0px 0px" >
        <CSVLink data={tempData} style={link2Style} filename="Template.csv">Download Template</CSVLink>
      </Box>
      </div>
    )
  }
}

export default ExportCSV



      