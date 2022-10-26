import Item from "../models/Item.js"


const create = async (req,res) => {

    try {
        const item = Item.create(req.body);
    return res.json({
        msg:"Item creado satisfactoriamente",
        item,
    });      
    } catch (error) {
        return res.status(500).json({
            msg:"Error al crear item",
            error,
        })
    } 
};



const read = async (req,res) => {
    try {
        const items = await Item.find(req.query);
      return  res.json({
            msg: "Items encontrados",
            items,
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Error al buscar items",

        })
    }
};


const readById = async (req,res)=> {
    const {id} = req.params;

    try {
        const item = await Item.findById(id)
        return res.json({
            msg:"Item encontrado",
            item,
        });
    } catch (error) {
        return res.json({
            msg:"Error al buscar por id",
            error,
        })
    }
}






const update = async (req,res) => {
    const {id} = req.params
    try {
   const item = await Item.findByIdAndUpdate(id, req.body, {
        new : true,
   });
        return res.json({
            msg:"Item modificado",
            item,
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Error al actualizar item",
            error,
        });
    }

    
};


const remove = () => {
    
};




export {create,read,update,remove,readById};