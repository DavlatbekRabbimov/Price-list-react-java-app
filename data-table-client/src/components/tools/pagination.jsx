import React from "react";
import {useProvider} from "../../providers/provider.jsx";
import {ButtonContainer, PaginationContainer, TotalPageContainer, TotalPageText} from "../../ui-styles/container-style.jsx";
import {NextButton, PrevButton} from "../../ui-styles/button-style.jsx";

export const Pagination = ()=> {

    const {currentPage, setCurrentPage, totalPages, } = useProvider().provider;
    const nextPage = () => {
        if (currentPage < totalPages.length){
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = ()=> {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return(
        <PaginationContainer>
            <TotalPageContainer>
                <TotalPageText name={`Page ${currentPage} from ${totalPages.length}`}/>
            </TotalPageContainer>
            <ButtonContainer>
                <PrevButton name={`Back`} onClick={prevPage}/>
                <NextButton name={`Next`} onClick={nextPage}/>
            </ButtonContainer>
        </PaginationContainer>
    )
}