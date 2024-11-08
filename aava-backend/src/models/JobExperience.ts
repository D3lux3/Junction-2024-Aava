import { DataTypes, InferAttributes, InferCreationAttributes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../utils/database";

class JobExperience extends Model<InferAttributes<JobExperience>, InferCreationAttributes<JobExperience>> {
    declare id: string;
    declare companyName: string;
    declare field: string;
    declare startDate: Date;
    declare endDate: Date;
}

JobExperience.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    field: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'jobexperience',
    tableName: 'jobexperiences',
    underscored: true,
    timestamps: false
})

export default JobExperience;