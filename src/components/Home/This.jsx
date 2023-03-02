import React from 'react'
import Pict from '../../assets/poto-this.svg'
import '../../styles/This.css'

const This = () => {
    return (
        <div className='this'>
            <div className='this-pict'>
                <img src={Pict} />
            </div>
            <div className='this-text'>
                <h1>KENAPA HARUS KITA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor bibendum diam id volutpat. Sed laoreet lacus quis sagittis malesuada. Morbi sollicitudin lectus a eros fermentum eleifend. Phasellus dictum quam a tortor tempus fermentum. Cras aliquam justo dui, quis aliquam purus iaculis ac. Etiam vel diam efficitur, rutrum tortor in, tempor odio. Curabitur non erat vitae libero varius vestibulum. Integer vel neque a neque pulvinar dignissim in ac magna. Fusce ac scelerisque turpis. Mauris lacinia euismod tellus vitae tincidunt. Donec vel volutpat est. Pellentesque ut libero molestie, iaculis massa quis, luctus elit.</p>
            </div>

        </div>
    )
}

export default This