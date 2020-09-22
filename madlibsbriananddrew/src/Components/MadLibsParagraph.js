import React, { Component } from 'react';

export default class MadLibsParagraph extends Component {
    render() {
        const { form } = this.props
        return(
            <>
                A { form.noun1 } in { form.place } was arrested this morning after they { form.verb1 } in front of a { form.noun2 }. The person had a history of { form.verb2 }, but no one not even their { form.noun3 } ever imagined they'd { form.verb3 } with a { form.noun4 } stuck in their { form.bodyPart }. 
            </>
        )
    }
}