import { DataTypes, InferAttributes, InferCreationAttributes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../utils/database";
import { Company } from ".";

class JobListing extends Model<InferAttributes<JobListing>, InferCreationAttributes<JobListing>> {
    declare id: string;
    declare jobName: string;
    declare jobDescription: string;
    declare companyId: ForeignKey<Company['id']>;
}

JobListing.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    jobName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'joblisting',
    tableName: 'joblistings',
    underscored: true,
    timestamps: false
})

export default JobListing;