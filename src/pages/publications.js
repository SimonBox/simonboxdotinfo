import Page from '../page.js';
import {get_publication_by_key} from '../simon_box_pubs.js';

const pub_keys = [
 'box2014supervised',
 'box2013automated',
 'box2012automated',
 'box2011stochastic',
 'eerland2017gaussian',
 'eerland2016trajectory',
 'lees2013hidden',
 'eerland2016modeling',
 'waterson2012quantifying',
 'rafter2017traffic',
 'rafter2020augmenting',
 'sowman2018use',
 'eerland2017cambridge',
 'eerland2017teetool',
 'eerland2017open',
 'box2014fine',
 'box2013urban',
 'box2012methodology',
 'mcleod2017using',
 'box2007multi',
 'rafter2018hybrid',
 'box2013lessons',
 'box2010signal',
 'box2010comparison',
 'gao2017developing',
 'box201330',
 'gao2018developing'
];

class Publications extends Page{
    format_publication(key) {
        const pub_json = get_publication_by_key(key);
        const journal = pub_json.entryTags.journal || pub_json.entryTags.booktitle;
        let entry = [];
        var doi_lab = "";
        var doi = ""; 
        var doi_url = "";
        if (pub_json.entryTags.doi) {
            doi_lab = "doi: ";
            doi = pub_json.entryTags.doi;
            doi_url = "https://doi.org/" + doi;
        }
        entry.push((<li>{pub_json.entryTags.author} ({pub_json.entryTags.year}) <a href={pub_json.entryTags.url}>{pub_json.entryTags.title}.</a> <i>{journal}.</i> {doi_lab} <a href={doi_url}>{doi}</a></li>));
        return entry;
    }
    get_formatted_publication_list() {
        let publist = [];
        for (var i=0; i < pub_keys.length; i++) {
            publist.push(this.format_publication(pub_keys[i]));
        }
        return publist;
    }
    content(){
        var pubs_text = this.get_formatted_publication_list();
        return(
            <div>
                <h2>Selected Publications</h2>
                <p>{pubs_text}</p>
            </div>
        )
    }
}

export default Publications; 
